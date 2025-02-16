import { Request, Response } from "express";
import { prisma } from "../..";

export const fetchUser = async (req: Request, res: Response) => {
  try {
    const name = req.params.username;
    console.log(name);
    const user = await prisma.profile.findMany({
      where: {
        name,
      },
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
