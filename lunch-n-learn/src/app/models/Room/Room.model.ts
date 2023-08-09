import { UUIDUtil } from "src/app/utils/UUIDUtil";

export abstract class Room {
	public id = UUIDUtil.UUID();
}