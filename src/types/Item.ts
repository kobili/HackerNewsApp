import { ItemType } from "../enums/ItemType";

export interface ItemResponse {
    itemId: number;
    isDeleted?: boolean;
    itemType: ItemType;
    poster?: string;
    postedAt?: number;
    isDead?: boolean;
    replies?: ItemResponse[];

    text?: string;
    url?: string;
    title?: string;    

    repliesCount?: number;
    upvotes?: number;

    parentId?: number;
    pollParts?: ItemResponse[];
}
