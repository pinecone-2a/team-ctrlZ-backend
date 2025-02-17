import { Request, Response, Router } from "express";
import { prisma } from "../..";

export const fetchTotalEarnings = async (req: Request, res: Response) => {
  const id = req.params.userId; // Extract user ID from request parameters
  try {
    const donations = await prisma.donation.findMany({
      where: {
        recipentId: id,
      },
    });
    console.log({ id });
    const totalEarnings = donations.reduce((total, donation) => {
      return total + (donation.amount || 0);
    }, 0);

    res.json({
      totalEarnings,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch total donations" });
  }
};
