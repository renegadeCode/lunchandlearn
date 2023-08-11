import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchRoomComponent } from './lunch-room.component';

describe('LunchRoomComponent', () => {
  let component: LunchRoomComponent;
  let fixture: ComponentFixture<LunchRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunchRoomComponent]
    });
    fixture = TestBed.createComponent(LunchRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
