import { Request, Response, Router } from "express";
import { prisma } from "../..";

export const editBankCard = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { country, firstName, lastName, cardNumber, expiryDate } = req.body;

    if (!userId) {
      res.status(400).json({ message: "Bank Card ID is required" });
    }

    const updatedBankcard = await prisma.bankCard.update({
      where: {
        userId: userId,
      },
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate: new Date(expiryDate),
      },
    });

    res.json({
      message: "Bank card updated successfully!",
      data: updatedBankcard,
    });
  } catch (e) {
    res.send(e);
  }
};
