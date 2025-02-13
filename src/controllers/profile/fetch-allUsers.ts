import { Request, Response } from "express";
import { prisma } from "../..";

export const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
