import { Component, Input } from '@angular/core';
import { Attendee } from "src/app/models/Attendee.model";
import { VirtualRoom } from "src/app/models/Room/VirtualRoom.model";
import { BrowserStorageService } from "src/app/services/browser-storage.service";
import { LunchService } from "src/app/services/lunch.service";

@Component({
  selector: 'virtual-room',
  templateUrl: './virtual-room.component.html',
  styleUrls: ['./virtual-room.component.scss']
})
export class VirtualRoomComponent {
	@Input() public room!: VirtualRoom;

	constructor(private lunchService: LunchService, private browserStorage: BrowserStorageService) {}

	public close() {
		this.lunchService.removeVirtualRoom(this.room);
	}

	public get participants() {
		return this.room.attendees;
	}

	public addParticipant(particpant: string) {
		this.room.attendees.add(new Attendee(particpant));
		this.browserStorage.addRoom(this.room);
	}
}
