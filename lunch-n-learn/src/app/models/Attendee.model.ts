import { HungerState } from "../enums/HungerStateEnum.model";

export class Attendee {
	public type: string;
	public state: HungerState = HungerState.HUNGRY;
	public order = "";

	constructor(attendeeType: string) {
		this.type = attendeeType;
	}

	public toJson(): string {
		const json: any = {};
		json['type'] = this.type;
		return JSON.stringify(json);
	}

	public static fromJson(json: any): Attendee | undefined {
		if (json) {
			const attendee = JSON.parse(json);
			if (attendee && attendee.type) return new Attendee(attendee.type);
		}
		return undefined;
	}
}