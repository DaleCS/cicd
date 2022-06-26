import "dotenv/config";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", async (req: Request, res: Response) => {
    return res.status(200).json({ msg: "Hello world " });
});

app.listen(PORT, (): void => {
    console.log("express server is listening on port: " + PORT);
    console.log("change");
});
