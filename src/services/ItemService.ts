import { ItemType } from "../enums/ItemType";
import { getItem } from "../hackernews-api-v0";
import { mapItemToResponse } from "../mapper/ItemMapper";
import { ItemResponse } from "../types/Item";

class ItemService {
    constructor() { }

    public async getItem(itemId: number): Promise<ItemResponse> {
        const item = await getItem(itemId);

        const response = mapItemToResponse(item);

        if (item.parts) {
            response.pollParts = await Promise.all(item.parts.map(id => this.getItem(id)));
        }

        if (item.kids) {
            response.replies = await Promise.all(item.kids.map(id => this.getItem(id)));
        } else if (item.type !== ItemType.JOB && item.type !== ItemType.POLL_OPT) {
            response.replies = []
        }

        return response;
    }
}

const itemService = new ItemService();
export default itemService;
