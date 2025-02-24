import { PrismaClient } from "@prisma/client";

import express from "express";

import { bankCardRouter } from "./routers/bankcard";
import { userRouter } from "./routers/user";
import { profileRouter } from "./routers/profile";
import dotenv from "dotenv";
import { donationRouter } from "./routers/donation";
import cors from "cors";

dotenv.config();
export const prisma = new PrismaClient();
const PORT = 4000;
const app = express();
app.use(
  cors({
    origin: [
      "https://team-ctrl-z-frontend.vercel.app",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/auth", userRouter);
app.use("/bank-card", bankCardRouter);
app.use("/profile", profileRouter);
app.use("/donation", donationRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
