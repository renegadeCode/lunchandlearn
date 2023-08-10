import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Attendee } from "../models/Attendee.model";
import { LunchRoom } from "../models/Room/LunchRoom.model";
import { VirtualRoom } from "../models/Room/VirtualRoom.model";
import { BrowserStorageService } from "./browser-storage.service";

@Injectable()
export class LunchService {
	private attendees = new BehaviorSubject<Set<Attendee>>(new Set());
	public readonly onAttendeesChanged = this.attendees.asObservable();

	private lunchRoomsMap = new Map<string, LunchRoom>();
	private lunchRooms = new BehaviorSubject<Set<LunchRoom>>(new Set());
	public readonly onLunchRoomsChanged = this.lunchRooms.asObservable();

	private virtualRoomsMap = new Map<string, VirtualRoom>();
	private virtualRooms = new BehaviorSubject<Set<VirtualRoom>>(new Set());
	public readonly onVirtualRoomsChanged = this.virtualRooms.asObservable();

	private serve = new Subject();
	public readonly onServe = this.serve.asObservable();

	constructor(private browserStorage: BrowserStorageService) {
		browserStorage.getRooms().forEach(room => {
			if (room instanceof VirtualRoom) {
				this.addVirtualRoom(room);
			} else if (room instanceof LunchRoom) {
				this.addLunchRoom(room);
			}
		});
	}

	public addAttendee(attendee: Attendee) {
		this.attendees.next(this.attendees.getValue().add(attendee));
	}

	public addVirtualRoom(virtualRoom: VirtualRoom) {
		this.virtualRoomsMap.set(virtualRoom.id, virtualRoom);
		this.virtualRooms.next(new Set(this.virtualRoomsMap.values()));
		this.browserStorage.addRoom(virtualRoom);
	}

	public addLunchRoom(lunchRoom: LunchRoom) {
		this.lunchRoomsMap.set(lunchRoom.id, lunchRoom);
		this.lunchRooms.next(new Set(this.lunchRoomsMap.values()));
		this.browserStorage.addRoom(lunchRoom);
	}

	public removeVirtualRoom(virtualRoom: VirtualRoom) {
		this.virtualRoomsMap.delete(virtualRoom.id);
		this.virtualRooms.next(new Set(this.virtualRoomsMap.values()));
		this.browserStorage.removeLunchRoom(virtualRoom);
	}

	public removeLunchRoom(lunchRoom: LunchRoom) {
		this.lunchRoomsMap.delete(lunchRoom.id);
		this.lunchRooms.next(new Set(this.lunchRoomsMap.values()));
		this.browserStorage.removeLunchRoom(lunchRoom);
	}

	public serveAttendees() {
		this.serve.next(true);
	}
}