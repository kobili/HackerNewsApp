import { CommentResponse } from "./Comment";

export interface StoryResponse {
    id: number;
    title: string;
    url: string;
    score: number;
    poster: string;
    commentCount: number;
    comments: CommentResponse[];
    postedAt: number;
}

export interface StoryPreviewResponse {
    id: number;
    title: string;
    url: string;
    score: number;
    poster: string;
    commentCount: number;
    postedAt: number;
}
