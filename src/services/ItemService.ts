import { getComment } from "../hackernews-api-v0";
import { CommentResponse } from "../types/Comment";

class ItemService {
    constructor() {}

    public async getComment(commentId: number) {
        const comment = await getComment(commentId);

        let response: CommentResponse = {
            id: comment.id,
            user: comment.by,
            text: comment.text,
            postedAt: comment.time,
            replies: [],
            parentId: comment.parent,
        }

        if (!comment.kids) {
            return response; 
        }

        response.replies = await Promise.all(comment.kids.map(childId => this.getComment(childId)));

        return response;
    }
}

const itemService = new ItemService();
export default itemService;
