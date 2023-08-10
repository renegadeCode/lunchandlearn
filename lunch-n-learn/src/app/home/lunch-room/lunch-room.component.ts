import { Component, Input } from '@angular/core';
import { Attendee } from "src/app/models/Attendee.model";
import { LunchRoom } from "src/app/models/Room/LunchRoom.model";
import { BrowserStorageService } from "src/app/services/browser-storage.service";
import { LunchService } from "src/app/services/lunch.service";

@Component({
  selector: 'lunch-room',
  templateUrl: './lunch-room.component.html',
  styleUrls: ['./lunch-room.component.scss']
})
export class LunchRoomComponent {
	@Input() public room!: LunchRoom;

	constructor(private lunchService: LunchService, private browserStorage: BrowserStorageService) {}

	public close() {
		this.lunchService.removeLunchRoom(this.room);
	}

	public get participants() {
		return this.room.attendees;
	}

	public addParticipant(particpant: string) {
		this.room.attendees.add(new Attendee(particpant));
		this.browserStorage.addRoom(this.room);
	}
}
