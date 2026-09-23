import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaPlanaltoComponent } from './ala-planalto.component';

describe('AlaPlanaltoComponent', () => {
  let component: AlaPlanaltoComponent;
  let fixture: ComponentFixture<AlaPlanaltoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlaPlanaltoComponent]
    });
    fixture = TestBed.createComponent(AlaPlanaltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
