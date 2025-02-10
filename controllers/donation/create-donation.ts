import { Request, Response, Router } from "express";
import { prisma } from "../..";

export const createDonation = async (req: Request, res: Response) => {
  const {
    amount,
    specialMessage,
    socialURLOrBuyMeACoffee,
    donorId,
    recipentId,
  } = req.body;
  try {
    const newDonation = await prisma.donation.create({
      data: {
        amount,
        specialMessage,
        socialURLOrBuyMeACoffee,
        donorId,
        recipentId,
      },
    });
    res.json(newDonation);
  } catch (e) {
    res.send(e);
    console.log(e);
  }
};
export const fetchReceivedDonation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const receivedDonation = await prisma.donation.findMany({
    where: {
      donorId: id,
    },
  });
  res.json(receivedDonation);
};
