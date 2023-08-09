import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticpantSelectComponent } from './particpant-select.component';

describe('ParticpantSelectComponent', () => {
  let component: ParticpantSelectComponent;
  let fixture: ComponentFixture<ParticpantSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticpantSelectComponent]
    });
    fixture = TestBed.createComponent(ParticpantSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
