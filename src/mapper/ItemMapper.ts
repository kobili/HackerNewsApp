import { ItemResponse } from "../types/Item"
import { iHackerNewsItem } from "../types/hacker-news-api/Item"

export const mapItem = (hnItem: iHackerNewsItem): ItemResponse => {
    const itemResponse = {} as ItemResponse;

    itemResponse.itemId = hnItem.id;
    itemResponse.itemType = hnItem.type;

    if (hnItem.deleted) {
        itemResponse.isDeleted = hnItem.deleted;
    }

    if (hnItem.by) {
        itemResponse.poster = hnItem.by;
    }

    if (hnItem.time) {
        itemResponse.postedAt = hnItem.time;
    }

    if (hnItem.dead) {
        itemResponse.isDead = hnItem.dead;
    }

    if (hnItem.text) {
        itemResponse.text = hnItem.text;
    }

    if (hnItem.url) {
        itemResponse.url = hnItem.url;
    }

    if (hnItem.title) {
        itemResponse.title = hnItem.title;
    }

    if (hnItem.descendants) {
        itemResponse.repliesCount = hnItem.descendants;
    }

    if (hnItem.score) {
        itemResponse.upvotes = hnItem.score;
    }

    if (hnItem.parent) {
        itemResponse.parentId = hnItem.parent;
    }

    return itemResponse;
}