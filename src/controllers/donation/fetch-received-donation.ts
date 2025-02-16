import { Request, Response, Router } from "express";
import { prisma } from "../..";

export const fetchReceivedDonation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const receivedDonation = await prisma.donation.findMany({
    where: {
      recipentId: id,
    },
  });
  res.json(receivedDonation);
};
