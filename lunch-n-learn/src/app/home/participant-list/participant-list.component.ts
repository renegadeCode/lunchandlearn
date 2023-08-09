import { Component, Input } from '@angular/core';
import { Attendee } from "src/app/models/Attendee.model";

@Component({
  selector: 'participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent {

	@Input() public participants!: Set<Attendee>;

	public removeParticipant(participant: Attendee) {
		this.participants.delete(participant);
	}
}
