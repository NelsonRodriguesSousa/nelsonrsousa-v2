import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrascalComponent } from './carrascal.component';

describe('CarrascalComponent', () => {
  let component: CarrascalComponent;
  let fixture: ComponentFixture<CarrascalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrascalComponent]
    });
    fixture = TestBed.createComponent(CarrascalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
