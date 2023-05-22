import { CommentResponse } from "./Comment";

export interface AskResponse {
    id: number;
    title: string;
    text: string;
    poster: string;
    commentCount: number;
    comments: CommentResponse[];
    postedAt: number;
}

export interface AskPreviewResponse {
    id: number;
    title: string;
    poster: string;
    commentCount: number;
    postedAt: number;
}
