import { Request, Response } from "express";
import { prisma } from "../..";

export const fetchAllUsers = async (req: Request, res: Response) => {
  console.log("hello");
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
