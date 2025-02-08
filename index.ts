import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import express, { Request, Response } from "express";

import { bankCardRouter } from "./controllers/bank-card/create-bankcard";
import { userRouter } from "./routers/user";
import { profileRouter } from "./routers/profile";
import dotenv from "dotenv";
dotenv.config();
const cors = require("cors");
const PORT = 4001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/sign-up", userRouter);
app.use("/bank-card", bankCardRouter);
app.use("/profile", profileRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
