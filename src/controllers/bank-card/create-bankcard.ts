import { Request, Response, Router } from "express";
import { prisma } from "../..";

export const fetchBankCards = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bankCards = await prisma.bankCard.findUnique({
    where: {
      userId: id,
    },
  });
  res.json(bankCards);
};

export const createBankCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { country, firstName, lastName, cardNumber, expiryDate } = req.body;

  try {
    const newBankcard = await prisma.bankCard.create({
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate: new Date(expiryDate),
        userId: id,
      },
    });
    res.json(newBankcard);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
