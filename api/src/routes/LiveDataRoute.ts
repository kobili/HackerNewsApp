import express, { NextFunction, Request, Response } from "express";
import liveDataService from "../services/LiveDataService";

const router = express.Router()

interface TopStoryReqParams {
    page?: number;
    perPage?: number;
}
router.get("/topstories", (req: Request<{}, {}, {}, TopStoryReqParams>, res: Response, next: NextFunction) => {
    // Need to convert to Number type because typescript is shit like that: https://stackoverflow.com/a/39272002
    const page = req.query.page ? Number(req.query.page) : undefined;
    const perPage = req.query.perPage ? Number(req.query.perPage) : undefined;

    return liveDataService.getTopStories(page, perPage)
        .then(response => res.send(response))
        .catch(err => next(err))
})

export default router
