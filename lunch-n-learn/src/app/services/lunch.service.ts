import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Room } from "../models/Room/Room.model";

@Injectable()
export class LunchService {
	private roomsMap = new Map<string, Room>();
	private rooms = new BehaviorSubject<Set<Room>>(new Set());
	public readonly onRoomsChanged = this.rooms.asObservable();

	private serve = new Subject();
	public readonly onServe = this.serve.asObservable();

	public addRoom(room: Room) {
		this.roomsMap.set(room.id, room);
		this.rooms.next(new Set(this.roomsMap.values()));
	}

	public removeRoom(room: Room) {
		this.roomsMap.delete(room.id);
		this.rooms.next(new Set(this.roomsMap.values()));
	}

	public serveAttendees() {
		this.serve.next(true);
	}
}