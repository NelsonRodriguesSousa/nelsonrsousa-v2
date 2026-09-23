import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaplandComponent } from './lapland.component';

describe('LaplandComponent', () => {
  let component: LaplandComponent;
  let fixture: ComponentFixture<LaplandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaplandComponent]
    });
    fixture = TestBed.createComponent(LaplandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
