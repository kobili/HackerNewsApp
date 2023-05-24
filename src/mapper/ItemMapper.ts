import { ItemType } from "../enums/ItemType";
import { ItemPreview, ItemResponse } from "../types/Item"
import { iHackerNewsItem } from "../types/hacker-news-api/Item"

export const mapItemToResponse = (hnItem: iHackerNewsItem): ItemResponse => {
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
        itemResponse.totalReplies = hnItem.descendants;
    } else if (hnItem.type !== ItemType.JOB && hnItem.type !== ItemType.POLL_OPT) {
        itemResponse.totalReplies = 0
    }

    if (hnItem.score) {
        itemResponse.upvotes = hnItem.score;
    }

    if (hnItem.parent) {
        itemResponse.parentId = hnItem.parent;
    }

    return itemResponse;
}

export const mapItemToPreview = (item: iHackerNewsItem): ItemPreview => {
    const preview = {} as ItemPreview;

    preview.itemId = item.id;
    preview.itemType = item.type;

    if (item.by) {
        preview.poster = item.by;
    }

    if (item.time) {
        preview.postedAt = item.time
    }

    if (item.title) {
        preview.title = item.title
    }

    if (item.url) {
        preview.url = item.url
    }

    if (item.descendants) {
        preview.totalReplies = item.descendants
    } else if (item.type !== ItemType.JOB && item.type !== ItemType.POLL_OPT) {   // jobs can't have comments
        preview.totalReplies = 0
    }

    if (item.score) {
        preview.upvotes = item.score
    }

    return preview;
}
