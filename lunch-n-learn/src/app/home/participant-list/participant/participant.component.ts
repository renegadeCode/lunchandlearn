import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { HungerState } from "src/app/enums/HungerStateEnum.model";
import { Attendee } from "src/app/models/Attendee.model";
import { LunchService } from "src/app/services/lunch.service";
import { SubscriptionManager } from "src/app/utils/SubscriptionManager.model";

@Component({
  selector: 'participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnDestroy{

	@Input() participant!: Attendee;
	@Output() remove = new EventEmitter();
	public menu = ['pizza', 'chipotle', 'subs'];

	private subManger = new SubscriptionManager();
	
	constructor(private lunchService: LunchService) {}

	ngOnDestroy(): void {
		this.subManger.unsubAll();
	}

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
