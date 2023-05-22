import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express()
const SERVER_PORT = 3000;

app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "Hello, Express!" })
});

app.listen(
    SERVER_PORT,
    () => console.log(`Express server listening on port ${SERVER_PORT}: http://localhost:${SERVER_PORT}`)
);
