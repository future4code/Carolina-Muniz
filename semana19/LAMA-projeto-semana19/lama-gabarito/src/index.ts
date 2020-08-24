import express from "express";
import userRouter from "./router/user";
import bandRouter from "./router/band";
import cors from "cors";
import dotenv from "dotenv";
import showRouter from "./router/show";

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.use("/users/", userRouter);
app.use("/bands/", bandRouter);
app.use("/shows/", showRouter);

export default app;
