import { Component, Input } from '@angular/core';
import { Attendee } from "src/app/models/Attendee.model";
import { LunchRoom } from "src/app/models/Room/LunchRoom.model";
import { LunchService } from "src/app/services/lunch.service";

@Component({
  selector: 'lunch-room',
  templateUrl: './lunch-room.component.html',
  styleUrls: ['./lunch-room.component.scss']
})
export class LunchRoomComponent {
	@Input() public room!: LunchRoom;
	public participants = new Set<Attendee>();

	constructor(private lunchService: LunchService) {}

	public close() {
		this.lunchService.removeLunchRoom(this.room);
	}

	public addParticipant(particpant: string) {
		this.participants.add(new Attendee(particpant));
	}
}
