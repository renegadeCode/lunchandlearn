import { AfterContentChecked, AfterViewChecked, ChangeDetectorRef, Component, OnChanges, QueryList, SimpleChanges, ViewChildren, ViewContainerRef } from '@angular/core';
import { LunchRoom } from "src/app/models/Room/LunchRoom.model";
import { Room } from "src/app/models/Room/Room.model";
import { VirtualRoom } from "src/app/models/Room/VirtualRoom.model";
import { LunchService } from "src/app/services/lunch.service";
import { VirtualRoomComponent } from "../room-components/virtual-room/virtual-room.component";
import { RoomComponent } from "../room-components/RoomComponent.interface";
import { LunchRoomComponent } from "../room-components/lunch-room/lunch-room.component";

@Component({
	selector: 'lunch-n-learn',
	templateUrl: './lunch-n-learn.component.html',
	styleUrls: ['./lunch-n-learn.component.scss']
})
export class LunchNLearnComponent {

	public lunchRooms: Set<LunchRoom> = new Set();
	public virtualRooms: Set<VirtualRoom> = new Set();

	@ViewChildren('rooms', { read: ViewContainerRef }) private roomsReferences!: QueryList<ViewContainerRef>;
	public rooms: Set<Room> = new Set();

	constructor(lunchService: LunchService) {
		lunchService.onRoomsChanged.subscribe(rooms => {
			this.rooms = rooms;
		});
	}

	public createRoomComponents() {
		if (this.roomsReferences) {
			this.roomsReferences.map((viewContainer, index) => {
				viewContainer.clear();
				const room: Room = Array.from(this.rooms)[index]
				let component: RoomComponent;
				if (room instanceof VirtualRoom) {
					component = viewContainer.createComponent<RoomComponent>(VirtualRoomComponent).instance;
					component.room = room;
				} else if (room instanceof LunchRoom) {
					component = viewContainer.createComponent<RoomComponent>(LunchRoomComponent).instance;
					component.room = room;
				}
			});
		}
	}
}
