import { Component } from '@angular/core';
import { LunchRoom } from "src/app/models/Room/LunchRoom.model";
import { VirtualRoom } from "src/app/models/Room/VirtualRoom.model";
import { LunchService } from "src/app/services/lunch.service";

@Component({
  selector: 'lunch-n-learn',
  templateUrl: './lunch-n-learn.component.html',
  styleUrls: ['./lunch-n-learn.component.scss']
})
export class LunchNLearnComponent {

	public lunchRooms: Set<LunchRoom> = new Set();
	public virtualRooms: Set<VirtualRoom> = new Set();

	constructor(lunchService: LunchService) {
		lunchService.onLunchRoomsChanged.subscribe((lunchRooms: Set<LunchRoom>) => {this.lunchRooms = lunchRooms});
		lunchService.onVirtualRoomsChanged.subscribe((virtualRooms: Set<VirtualRoom>) => {this.virtualRooms = virtualRooms})
	}

}
