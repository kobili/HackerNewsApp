import { getAsk, getComment, getJob, getStory } from "../hackernews-api-v0";
import { AskPreviewResponse, AskResponse } from "../types/Ask";
import { CommentResponse } from "../types/Comment";
import { JobResponse } from "../types/Job";
import { StoryPreviewResponse, StoryResponse } from "../types/Story";

class ItemService {
    constructor() { }

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

    public async getComment(commentId: number): Promise<CommentResponse> {
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

    public async getJob(jobId: number): Promise<JobResponse> {
        const job = await getJob(jobId);

        return {
            id: job.id,
            title: job.title,
            url: job.url,
            postedAt: job.time,
        }
    }

    public async getAsk(askId: number): Promise<AskResponse> {
        const ask = await getAsk(askId);

        let response: AskResponse = {
            id: ask.id,
            title: ask.title,
            text: ask.text,
            poster: ask.by,
            commentCount: ask.descendants,
            comments: [],
            postedAt: ask.time,
        }

        if (!ask.kids) {
            return response;
        }

        response.comments = await Promise.all(ask.kids.map(id => this.getComment(id)));

        return response;
    }

    public async getAskPreview(askId: number): Promise<AskPreviewResponse> {
        const ask = await getAsk(askId);

        return {
            id: ask.id,
            title: ask.title,
            poster: ask.by,
            commentCount: ask.descendants,
            postedAt: ask.time,
        }
    }
}

const itemService = new ItemService();
export default itemService;
