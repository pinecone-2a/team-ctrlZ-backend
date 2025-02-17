import { Request, Response, Router } from "express";
import { prisma } from "../..";

export const editBankCard = async (req: Request, res: Response) => {
  try {
    const { bankCardId } = req.params;
    const { country, firstName, lastName, cardNumber, expiryDate } = req.body;

    if (!bankCardId) {
      return res.status(400).json({ message: "Bank Card ID is required" });
    }

    const updatedBankcard = await prisma.bankCard.update({
      where: {
        id: bankCardId,
      },
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate: new Date(expiryDate),
      }
    });

    return res.json({
      message: "Bank card updated successfully!",
      data: updatedBankcard
    });
  }

  catch(e) {
    res.send(e)
  }
};