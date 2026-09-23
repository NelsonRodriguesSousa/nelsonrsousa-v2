import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeCentralComponent } from './cafe-central.component';

describe('CafeCentralComponent', () => {
  let component: CafeCentralComponent;
  let fixture: ComponentFixture<CafeCentralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CafeCentralComponent]
    });
    fixture = TestBed.createComponent(CafeCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
