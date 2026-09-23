import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutalantisComponent } from './autalantis.component';

describe('AutalantisComponent', () => {
  let component: AutalantisComponent;
  let fixture: ComponentFixture<AutalantisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutalantisComponent]
    });
    fixture = TestBed.createComponent(AutalantisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
