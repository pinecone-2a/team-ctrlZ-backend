import { Request, Response, Router } from "express";
export const userRouter = Router();
import { Prisma } from "@prisma/client";
import { prisma } from "../..";

userRouter.get("/", async (req: Request, res: Response) => {});

userRouter.post("/", async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: password,
        username: username,
      },
    });
    res.json(newUser);
  } catch {}
});
