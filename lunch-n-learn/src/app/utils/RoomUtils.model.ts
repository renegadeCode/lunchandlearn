import { Attendee } from "../models/Attendee.model";
import { LunchRoom } from "../models/Room/LunchRoom.model";
import { Room } from "../models/Room/Room.model";
import { VirtualRoom } from "../models/Room/VirtualRoom.model";

export class RoomUtils {
	public static createRoom(room: any): Room | undefined {
		if (room && room.type) {
			const attendees: Attendee[] = [];
			room.attendees.forEach((attendee: any) => {
				const participant = Attendee.fromJson(attendee);
				if (participant) attendees.push(participant);
			});
			switch(room.type) {
				case "virtualRoom":
					return new VirtualRoom(attendees);
				case "lunchRoom":
					return new LunchRoom(attendees);
			}
		}
		return undefined;
	}
}