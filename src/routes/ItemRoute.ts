import express, { NextFunction, Request, Response } from 'express';
import itemService from '../services/ItemService';

const router = express.Router();

router.get('/:itemId', async (req: Request, res: Response, next: NextFunction) => {
    const itemId = Number.parseInt(req.params.itemId);
    return itemService.getItem(itemId)
        .then(response => res.send(response))
        .catch(err => next(err));
});

export default router;
