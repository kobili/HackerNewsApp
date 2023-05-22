import express, { NextFunction, Request, Response } from 'express';
import itemService from '../services/ItemService';

const router = express.Router();

router.get('/comment/:commentId', async (req: Request, res: Response, next: NextFunction) => {
    const commentId = Number.parseInt(req.params.commentId);
    return itemService.getComment(commentId)
        .then(comment => res.send(comment))
        .catch(err => next(err));
});

router.get("/story/:storyId", async (req: Request, res: Response, next: NextFunction) => {
    const storyId = Number.parseInt(req.params.storyId);
    return itemService.getStory(storyId)
        .then(story => res.send(story))
        .catch(err => next(err));
});

router.get("/story/:storyId/preview", async (req: Request, res: Response, next: NextFunction) => {
    const storyId = Number.parseInt(req.params.storyId);
    return itemService.getStoryPreview(storyId)
        .then(story => res.send(story))
        .catch(err => next(err));
});

router.get("/job/:jobId", async (req: Request, res: Response, next: NextFunction) => {
    const jobId = Number.parseInt(req.params.jobId);
    return itemService.getJob(jobId)
        .then(story => res.send(story))
        .catch(err => next(err));
});

router.get("/ask/:askId", async (req: Request, res: Response, next: NextFunction) => {
    const askId = Number.parseInt(req.params.askId);
    return itemService.getAsk(askId)
        .then(response => res.send(response))
        .catch(err => next(err));
});

router.get("/ask/:askId/preview", async (req: Request, res: Response, next: NextFunction) => {
    const askId = Number.parseInt(req.params.askId);
    return itemService.getAskPreview(askId)
        .then(response => res.send(response))
        .catch(err => next(err));
});

export default router;
