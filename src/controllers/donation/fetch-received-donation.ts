import { Request, Response } from "express";
import { prisma } from "../..";

export const fetchReceivedDonation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const receivedDonation = await prisma.donation.findMany({
      where: {
        recipentId: id,
      },
    });
    res.json(receivedDonation);
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({ error: "Something went wrong", details: error });
  }
};
