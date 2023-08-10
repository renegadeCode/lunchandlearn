import { RoomUtils } from "src/app/utils/RoomUtils.model";
import { Room } from "../Room/Room.model";

export class BrowserStorage {

	public readonly version = '1.0';
	private lunch: Map<string, Room> = new Map();

	public addLunchRoom(room: Room) {
		this.lunch.set(room.id, room);
	}

	public removeLunchRoom(room: Room) {
		this.lunch.delete(room.id);
	}

	public get lunchRooms(): Room[] {
		return Array.from(this.lunch.values());
	}

	public static fromJson(json: any): BrowserStorage {
		const storage = new BrowserStorage();
		if (json && json.lunch) {
			for (let jsonRoom of Array.from(JSON.parse(json.lunch))) {
				const room: Room | undefined = RoomUtils.createRoom(JSON.parse((jsonRoom as string)));
				if (room) storage.addLunchRoom(room);
			}
		}
		return storage;
	}

	public static toJson(browserStorage: BrowserStorage): string {
		const json: any = {};
		const rooms: any[] = [];
		browserStorage.lunch.forEach(room => {
			rooms.push(room.toJson());
		});
		json.lunch = JSON.stringify(rooms);
		json.version = JSON.stringify(browserStorage.version);
		return JSON.stringify(json);
	}
}