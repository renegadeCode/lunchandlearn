import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchNLearnComponent } from './lunch-n-learn.component';

describe('LunchNLearnComponent', () => {
  let component: LunchNLearnComponent;
  let fixture: ComponentFixture<LunchNLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunchNLearnComponent]
    });
    fixture = TestBed.createComponent(LunchNLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
