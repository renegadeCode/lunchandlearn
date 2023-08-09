import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualRoomComponent } from './virtual-room.component';

describe('VirtualRoomComponent', () => {
  let component: VirtualRoomComponent;
  let fixture: ComponentFixture<VirtualRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualRoomComponent]
    });
    fixture = TestBed.createComponent(VirtualRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
