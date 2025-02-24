import { Request, Response } from "express";
import { prisma } from "../..";

export const fetchCurrentUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        userId: id,
      },
    });
    res.json(profile);
  } catch (error) {
    console.log(error);
  }
};
