import { Request, Response } from "express";
import { prisma } from "../..";

export const fetchProfile = async (req: Request, res: Response) => {
  // const profile = await prisma.profile.findUnique
};

export const createProfile = async (req: Request, res: Response) => {
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
  } catch (e) {
    res.send(e);
  }
};
