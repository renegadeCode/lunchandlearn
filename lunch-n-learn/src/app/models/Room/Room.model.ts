import { UUIDUtil } from "src/app/utils/UUIDUtil";
import { Attendee } from "../Attendee.model";

export abstract class Room {
	public id = UUIDUtil.UUID();
	public readonly type: string | undefined;
	public attendees: Set<Attendee> = new Set();

	constructor(attendees: Attendee[] = []) {
		this.attendees = new Set(attendees);
	}

	public toJson(): string {
		const json: any = {};
		json['type'] = this.type;
		json['attendees'] = [];
		this.attendees.forEach(attendee => json['attendees'].push(attendee.toJson()));
		return JSON.stringify(json);
	}
}