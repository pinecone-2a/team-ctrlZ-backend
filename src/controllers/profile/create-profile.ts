import { Request, Response } from "express";
import { prisma } from "../..";

export const createProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, about, avatarImage, socialMediaURL } = req.body;
  try {
    const newProfile = await prisma.profile.create({
      data: {
        name,
        about,
        avatarImage,
        socialMediaURL,
        userId: id,
      },
    });
    res.status(201).json({
      code: "PROFILE_CREATED_SUCCESSFULLY",
      success: true,
      message: "Profile created successfully",
      data: newProfile,
    });
  } catch (e) {
    res.send(e);
  }
};
