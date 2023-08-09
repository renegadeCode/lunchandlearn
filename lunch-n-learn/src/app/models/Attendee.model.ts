import { HungerState } from "../enums/HungerStateEnum.model";

export class Attendee {
	public type: string;
	public state: HungerState = HungerState.HUNGRY;
	public order = "";

	constructor(attendeeType: string) {
		this.type = attendeeType;
	}
}