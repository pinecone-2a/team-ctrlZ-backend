import { Request, Response } from "express";
import { prisma } from "../..";

export const fetchDonorProfile = async (req: Request, res: Response) => {
  const id = req.params.donorId;
  const donorProfile = await prisma.profile.findUnique({
    where: {
      userId: id,
    },
  });
  res.json(donorProfile);
};
