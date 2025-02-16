import { Request, Response } from "express";
import { prisma } from "../..";

export const addBackground = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { backgroundImage } = req.body;
  console.log("hello");
  try {
    const newBackgroundImage = await prisma.profile.update({
      where: {
        userId,
      },
      data: {
        backgroundImage,
      },
    });
    res.status(201).json({
      code: "BACKGROUND_CREATED_SUCCESSFULLY",
      success: true,
      message: "Background created successfully",
      data: newBackgroundImage,
    });
  } catch (e) {
    res.send(e);
  }
};
