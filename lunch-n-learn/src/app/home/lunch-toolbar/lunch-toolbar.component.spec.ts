import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchToolbarComponent } from './lunch-toolbar.component';

describe('LunchToolbarComponent', () => {
  let component: LunchToolbarComponent;
  let fixture: ComponentFixture<LunchToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunchToolbarComponent]
    });
    fixture = TestBed.createComponent(LunchToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
