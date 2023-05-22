import { getComment, getStory } from "../hackernews-api-v0";
import { CommentResponse } from "../types/Comment";
import { StoryPreviewResponse, StoryResponse } from "../types/Story";

class ItemService {
    constructor() {}

    public async getStory(storyId: number) {
        const story = await getStory(storyId);

        let response: StoryResponse = {
            id: story.id,
            title: story.title,
            url: story.url,
            score: story.score,
            poster: story.by,
            commentCount: story.descendants,
            comments: [],
            postedAt: story.time
        }

        if (!story.kids) {
            return response;
        }

        response.comments = await Promise.all(
            story.kids.map(childId => this.getComment(childId))
        );

        return response;
    }

    public async getStoryPreview(storyId: number): Promise<StoryPreviewResponse> {
        const story = await getStory(storyId);

        return {
            id: story.id,
            title: story.title,
            url: story.url,
            score: story.score,
            poster: story.by,
            commentCount: story.descendants,
            postedAt: story.time
        }
    }

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
