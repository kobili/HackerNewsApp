import { ItemType } from "../../enums/ItemType";

export interface iHackerNewsItem {
    id: number;
    deleted?: boolean;
    type: ItemType;
    by?: string;
    time?: number;
    dead?: boolean;
    kids?: number[];

    text?: string;
    url?: string;
    title?: string;    

    descendants?: number;
    score?: number;

    parent?: number;
    parts?: number[];
}
