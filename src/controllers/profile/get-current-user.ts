import { Request, Response } from "express";
import { prisma } from "../..";

export const fetchCurrentUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const profile = await prisma.profile.findUnique({
    where: {
      userId: id,
    },
  });
  res.json(profile);
};
