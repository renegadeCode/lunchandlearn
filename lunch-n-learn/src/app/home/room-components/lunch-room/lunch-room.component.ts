import { Component, Input } from '@angular/core';
import { Attendee } from "src/app/models/Attendee.model";
import { LunchRoom } from "src/app/models/Room/LunchRoom.model";
import { LunchService } from "src/app/services/lunch.service";
import { RoomComponent } from "../RoomComponent.interface";

@Component({
  selector: 'lunch-room',
  templateUrl: './lunch-room.component.html',
  styleUrls: ['./lunch-room.component.scss']
})
export class LunchRoomComponent extends RoomComponent {
	constructor(private lunchService: LunchService) {
		super();
	}

	public close() {
		this.lunchService.removeRoom(this.room);
	}
}
