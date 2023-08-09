import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Attendee } from "../models/Attendee.model";
import { LunchRoom } from "../models/Room/LunchRoom.model";
import { VirtualRoom } from "../models/Room/VirtualRoom.model";

@Injectable()
export class LunchService {
	private attendees = new BehaviorSubject<Set<Attendee>>(new Set());
	public readonly onAttendeesChanged = this.attendees.asObservable();

	private lunchRoomsMap = new Map<string, LunchRoom>();
	private lunchRooms = new BehaviorSubject<Set<LunchRoom>>(new Set());
	public readonly onLunchRoomsChanged = this.lunchRooms.asObservable();

	private virtualRoomsMap = new Map<string, LunchRoom>();
	private virtualRooms = new BehaviorSubject<Set<VirtualRoom>>(new Set());
	public readonly onVirtualRoomsChanged = this.virtualRooms.asObservable();

	private serve = new Subject();
	public readonly onServe = this.serve.asObservable();

	public addAttendee(attendee: Attendee) {
		this.attendees.next(this.attendees.getValue().add(attendee));
	}

	public addVirtualRoom(virtualRoom: VirtualRoom) {
		this.virtualRoomsMap.set(virtualRoom.id, virtualRoom);
		this.virtualRooms.next(new Set(this.virtualRoomsMap.values()));
	}

	public addLunchRoom(lunchRoom: LunchRoom) {
		this.lunchRoomsMap.set(lunchRoom.id, lunchRoom);
		this.lunchRooms.next(new Set(this.lunchRoomsMap.values()));
	}

	public removeVirtualRoom(virtualRoom: VirtualRoom) {
		this.virtualRoomsMap.delete(virtualRoom.id);
		this.virtualRooms.next(new Set(this.virtualRoomsMap.values()));
	}

	public removeLunchRoom(lunchRoom: LunchRoom) {
		this.lunchRoomsMap.delete(lunchRoom.id);
		this.lunchRooms.next(new Set(this.lunchRoomsMap.values()));
	}

	public serveAttendees() {
		this.serve.next(true);
	}
}