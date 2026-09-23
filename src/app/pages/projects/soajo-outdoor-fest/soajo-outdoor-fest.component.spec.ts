import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoajoOutdoorFestComponent } from './soajo-outdoor-fest.component';

describe('SoajoOutdoorFestComponent', () => {
  let component: SoajoOutdoorFestComponent;
  let fixture: ComponentFixture<SoajoOutdoorFestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoajoOutdoorFestComponent]
    });
    fixture = TestBed.createComponent(SoajoOutdoorFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
