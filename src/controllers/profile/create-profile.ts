import { Request, Response } from "express";
import { prisma } from "../..";

export const createProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    about,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
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
        userId: id,
      },
    });
    res.json(newProfile);
  } catch (e) {
    res.send(e);
  }
};
