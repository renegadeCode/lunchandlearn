import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HungerState } from "src/app/enums/HungerStateEnum.model";
import { Attendee } from "src/app/models/Attendee.model";
import { LunchService } from "src/app/services/lunch.service";

@Component({
  selector: 'participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent {

	@Input() participant!: Attendee;
	@Output() remove = new EventEmitter();
	public menu = ['pizza', 'chipotle', 'subs'];

	constructor(private lunchService: LunchService) {}

	public order(order: string) {
		this.participant.order = order;
		this.lunchService.onServe.subscribe(() => {
			this.participant.state = HungerState.SATED;
		});
	}

	public getHungerState() {
		return HungerState[this.participant.state];
	}

	public close() {
		this.remove.next(this.participant);
	}
}
