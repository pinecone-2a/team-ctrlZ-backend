import { Request, Response } from "express";
import { prisma } from "../..";
export const updateProfile = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { image, name, about, socialMedia } = req.body;
  try {
    const updatedUser = await prisma.profile.update({
      where: {
        userId,
      },
      data: {
        avatarImage: image,
        name,
        about: about,
        socialMediaURL: socialMedia,
      },
    });
    res.json({
      success: true,
      message: "Updated Successfully",
      code: "PROFILE_UPDATED_SUCCESSFULLY",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
};
