import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import express, { Request, Response } from "express";

import { bankCardRouter } from "./routers/bankcard";
import { userRouter } from "./routers/user";
import { profileRouter } from "./routers/profile";
import dotenv from "dotenv";
import { donationRouter } from "./routers/donation";
import cors from "cors";
import { forgotPassword } from "./controllers/forgot-password/forgot-password";
dotenv.config();

const PORT = 4000;
const app = express();

// app.options('*', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.sendStatus(200);
// })

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
