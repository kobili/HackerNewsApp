import express, { NextFunction, Request, Response } from 'express';
import itemService from '../services/ItemService';

const router = express.Router();

router.get('/comment/:commentId', async (req: Request, res: Response, next: NextFunction) => {
    const commentId = Number.parseInt(req.params.commentId);
    return itemService.getComment(commentId)
        .then(comment => res.send(comment))
        .catch(err => next(err));
});

export default router;
