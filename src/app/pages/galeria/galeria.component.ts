
import {
  Component,
  AfterViewInit,
  OnInit,
  OnDestroy,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent
  implements OnInit, AfterViewInit, OnDestroy {

  imagens: string[] = [];

  private resizeObserver?: ResizeObserver;
  private resizeTimeout?: ReturnType<typeof setTimeout>;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.imagens = Array.from(
      { length: 118 },
      (_, i) => `assets/img/projects/projeto-serra/projeto-serra-${i + 1}.jpg`
    );
  }

  ngAfterViewInit(): void {
    const grid = this.elementRef.nativeElement
      .querySelector('.masonry-grid') as HTMLElement;

    if (!grid) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.atualizarLayout();
    });

    this.resizeObserver.observe(grid);

    this.esperarImagens();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();

    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }

  esperarImagens(): void {
    const grid = this.elementRef.nativeElement
      .querySelector('.masonry-grid') as HTMLElement;

    const imagens = Array.from(
      grid.querySelectorAll('img')
    ) as HTMLImageElement[];

    Promise.all(
      imagens.map(img => {
        if (img.complete) return Promise.resolve();

        return new Promise<void>(resolve => {
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        });
      })
    ).then(() => {
      this.atualizarLayout();
    });
  }

  atualizarLayout(): void {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = setTimeout(() => {

      const grid = this.elementRef.nativeElement
        .querySelector('.masonry-grid') as HTMLElement;

      if (!grid) return;

      const items = Array.from(
        grid.querySelectorAll('.masonry-item')
      ) as HTMLElement[];

      if (!items.length) return;

      const gap = 5;

      const columns = window.innerWidth <= 576 ? 1 : 3;

      const columnWidth =
        (grid.clientWidth - gap * (columns - 1)) / columns;

      const heights = new Array(columns).fill(0);

      items.forEach((item, index) => {

        const column = index % columns;

        item.style.width = `${columnWidth}px`;
        item.style.left = `${column * (columnWidth + gap)}px`;
        item.style.top = `${heights[column]}px`;

        heights[column] += item.offsetHeight + gap;

      });

      grid.style.height = `${Math.max(...heights)}px`;

    }, 50);
  }
}
