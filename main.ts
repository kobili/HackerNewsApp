import express, { Request, Response } from 'express';
import cors from 'cors';
import { getUser } from './src/hackernews-api-v0';
import { User } from './src/types/User';

const app = express()
const SERVER_PORT = 3000;

app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "Hello, Express!" })
});

app.get("/user/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const userInfo = await getUser(userId);

    res.send(userInfo)
})

app.listen(
    SERVER_PORT,
    () => console.log(`Express server listening on port ${SERVER_PORT}: http://localhost:${SERVER_PORT}`)
);
