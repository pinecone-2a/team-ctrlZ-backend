import { Request, Response } from "express";
import { prisma } from "../..";

export const fetchAllusers = async (req: Request, res: Response) => {
  console.log("hi");
  const users = await prisma.profile.findMany();
  res.json(users);
};
