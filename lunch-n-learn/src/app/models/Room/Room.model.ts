import { UUIDUtil } from "src/app/utils/UUIDUtil";
import { Attendee } from "../Attendee.model";

export abstract class Room {
	public id = UUIDUtil.UUID();
	public readonly type: string | undefined;
	public attendees: Set<Attendee> = new Set();
}