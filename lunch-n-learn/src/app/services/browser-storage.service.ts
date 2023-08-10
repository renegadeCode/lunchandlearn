import { Injectable } from "@angular/core";
import { BrowserStorage } from "../models/config/BrowserStorage.model";
import { Room } from "../models/Room/Room.model";

@Injectable()
export class BrowserStorageService {
	private static browserStorage: BrowserStorage;
	constructor() {
		let json = localStorage.getItem('lunch-settings');
		BrowserStorageService.browserStorage = BrowserStorage.fromJson(json ? JSON.parse(json) : null);
	}

	public getRooms(): Room[] {
		return BrowserStorageService.browserStorage.lunchRooms;
	}

	public addRoom(room: Room) {
		BrowserStorageService.browserStorage.addLunchRoom(room);
		this.saveSettings();
	}

	public removeLunchRoom(room: Room) {
		BrowserStorageService.browserStorage.removeLunchRoom(room);
		this.saveSettings();
	}

	private saveSettings() {
		localStorage.setItem('lunch-settings', BrowserStorage.toJson(BrowserStorageService.browserStorage));
	}
}