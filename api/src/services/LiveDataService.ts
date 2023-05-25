import { getItem, getTopStories } from "../hackernews-api-v0";
import { mapItemToPreview } from "../mapper/ItemMapper";
import { ItemPreview } from "../types/Item";

class LiveDataService {
    constructor() { }

    public async getTopStories(page?: number, perPage?: number): Promise<{ total: number, page?: number; perPage?: number; stories: ItemPreview[] }> {
        let response = await getTopStories()
        const total = response.length

        
        if (page && perPage) {
            // TODO: validate that this doesn't go over the last element
            response = response.slice(page * perPage, page * perPage + perPage)
        }

        const stories = await Promise.all(response.map(async id => {
            const story = await getItem(id)
            return mapItemToPreview(story)
        }))

        return {
            total,
            page,
            perPage,
            stories,
        }
    }
}

const liveDataService = new LiveDataService()
export default liveDataService
