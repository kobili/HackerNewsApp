import { ItemType } from "../enums/ItemType";

// Source: https://hackernews.api-docs.io/v0/items/base
export interface Item {
    id: number;             // The item's unique id
    deleted?: boolean;      // true if the item is deleted
    type: ItemType;         // The type of item
    by?: string;            // The username of the item's author
    time?: number;          // Creation date of the item, in Unix time
    dead?: boolean;         // true if the item is dead
    kids?: number[];        // The ids of the item's comments, in ranked display order
}

export interface Job extends Item {
    text?: string;          // The comment, story or poll text. HTML
    url?: string;           // The URL of the story
    title?: string;         // The title of the story, poll or job
}

export interface Story extends Item {
    descendants?: number;    // The total comment count.
    score?: number;          // The story's score
    title?: string;          // The title of the story,
    url?: string;            // The URL of the story
}

export interface Comment extends Item {
    parent?: number;        // The item's parent. Either another comment or the relevant story
    text?: string;          // The commment text; HTML
}

export interface Poll extends Item {
    parts?: number[]        // A list of related pollops, in display order
    descendants?: number;   // The total comment count
    score?: number;         // The votes for a pollopt
    title?: string;         // The title of the poll
    text?: string;          // The poll text; HTML
}

export interface PollOption extends Item {
    parent?: number;        // The item's parent. For pollops, the relevant poll
    score?: number;         // The votes for a pollopt
}
