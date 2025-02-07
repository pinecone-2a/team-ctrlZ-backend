import { Request, Response, Router } from "express";
export const profileRouter = Router();
import { Prisma } from "@prisma/client";
import { prisma } from "../..";

profileRouter.get("/", async (req: Request, res: Response) => {});

profileRouter.post("/", async (req: Request, res: Response) => {
  const {
    name,
    about,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
    userId,
  } = req.body;
  try {
    const newProfile = await prisma.profile.create({
      data: {
        name,
        about,
        avatarImage,
        socialMediaURL,
        backgroundImage,
        successMessage,
        userId,
      },
    });
    res.json(newProfile);
  } catch {}
});
