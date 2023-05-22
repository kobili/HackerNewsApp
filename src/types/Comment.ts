export interface CommentResponse {
    id: number;
    user: string;
    parentId: number;
    text: string;
    postedAt: number;
    replies: CommentResponse[];
}