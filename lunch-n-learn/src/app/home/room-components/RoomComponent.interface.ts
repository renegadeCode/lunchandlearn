import { Attendee } from "src/app/models/Attendee.model";
import { Room } from "src/app/models/Room/Room.model";

export abstract class RoomComponent {
	public room!: Room;

	public abstract close(): void;

	public get participants() {
		return this.room.attendees;
	}

	public addParticipant(particpant: string) {
		this.participants.add(new Attendee(particpant));
	}
}