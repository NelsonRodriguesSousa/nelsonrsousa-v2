import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HswComponent } from './hsw.component';

describe('HswComponent', () => {
  let component: HswComponent;
  let fixture: ComponentFixture<HswComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HswComponent]
    });
    fixture = TestBed.createComponent(HswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
