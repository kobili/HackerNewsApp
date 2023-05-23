import { getItem } from "../hackernews-api-v0";
import { mapItem } from "../mapper/ItemMapper";
import { ItemResponse } from "../types/Item";

class ItemService {
    constructor() { }

    public async getItem(itemId: number): Promise<ItemResponse> {
        const item = await getItem(itemId);

        const response = mapItem(item);

        if (item.parts) {
            response.pollParts = await Promise.all(item.parts.map(id => this.getItem(id)));
        }

        if (item.kids) {
            response.replies = await Promise.all(item.kids.map(id => this.getItem(id)));
        }

        return response;
    }
}

const itemService = new ItemService();
export default itemService;
