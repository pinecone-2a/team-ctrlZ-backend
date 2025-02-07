import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import express, { Request, Response } from "express";
import { userRouter } from "./controllers/user/create-user";
import { bankCardRouter } from "./controllers/bank-card/create-bankcard";
import { profileRouter } from "./controllers/profile/create-profile";
const cors = require("cors");
const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth/sign-up", userRouter);
app.use("/bank-card", bankCardRouter);
app.use("/profile", profileRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
