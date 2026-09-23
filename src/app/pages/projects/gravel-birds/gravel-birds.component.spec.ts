import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravelBirdsComponent } from './gravel-birds.component';

describe('GravelBirdsComponent', () => {
  let component: GravelBirdsComponent;
  let fixture: ComponentFixture<GravelBirdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GravelBirdsComponent]
    });
    fixture = TestBed.createComponent(GravelBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
