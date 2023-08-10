import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from "src/app/environments/environment";
import { Room } from "src/app/models/Room/Room.model";

@Component({
  selector: 'particpant-select',
  templateUrl: './particpant-select.component.html',
  styleUrls: ['./particpant-select.component.scss']
})
export class ParticpantSelectComponent {

	public attendeesAllowed: Set<string>;
	@Input() room!: Room;
	@Output() participantAdded = new EventEmitter<string>();

	constructor() {
		this.attendeesAllowed = new Set(environment.config.attendeeList);
	}

	public addParticipant(particpant: string) {
		this.participantAdded.next(particpant);
	}
}
