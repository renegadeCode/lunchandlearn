import { Component } from '@angular/core';
import { LunchRoom } from "src/app/models/Room/LunchRoom.model";
import { VirtualRoom } from "src/app/models/Room/VirtualRoom.model";
import { LunchService } from "src/app/services/lunch.service";

@Component({
  selector: 'lunch-toolbar',
  templateUrl: './lunch-toolbar.component.html',
  styleUrls: ['./lunch-toolbar.component.scss']
})
export class LunchToolbarComponent {

	constructor(private lunchService: LunchService) {}

	public addVirtualRoom() {
		this.lunchService.addVirtualRoom(new VirtualRoom());
	}

	public addLunchRoom() {
		this.lunchService.addLunchRoom(new LunchRoom());
	}

	public serve() {
		this.lunchService.serveAttendees();
	}
}
