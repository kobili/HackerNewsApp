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

    // public async getStoryPreview(storyId: number): Promise<StoryPreviewResponse> {
    //     const story = await getStory(storyId);

    //     return {
    //         id: story.id,
    //         title: story.title,
    //         url: story.url,
    //         score: story.score,
    //         poster: story.by,
    //         commentCount: story.descendants,
    //         postedAt: story.time
    //     }
    // }

    // public async getAskPreview(askId: number): Promise<AskPreviewResponse> {
    //     const ask = await getAsk(askId);

    //     return {
    //         id: ask.id,
    //         title: ask.title,
    //         poster: ask.by,
    //         commentCount: ask.descendants,
    //         postedAt: ask.time,
    //     }
    // }
}

const itemService = new ItemService();
export default itemService;
