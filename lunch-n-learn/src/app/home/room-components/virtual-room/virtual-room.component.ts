import { Component } from '@angular/core';
import { LunchService } from "src/app/services/lunch.service";
import { RoomComponent } from "../RoomComponent.interface";

@Component({
  selector: 'virtual-room',
  templateUrl: './virtual-room.component.html',
  styleUrls: ['./virtual-room.component.scss']
})
export class VirtualRoomComponent extends RoomComponent {
	constructor(private lunchService: LunchService) {
		super();
	}

	public override close(): void {
		this.lunchService.removeRoom(this.room);
	}

}
