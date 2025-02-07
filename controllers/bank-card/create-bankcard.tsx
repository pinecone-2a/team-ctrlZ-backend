import { Request, Response, Router } from "express";
export const bankCardRouter = Router();
import { prisma } from "../..";

export const createBankCard = async (req: Request, res: Response) => {
  const { userId, country, firstName, lastName, cardNumber, expiryDate } =
    req.body;
  try {
    const newUser = await prisma.bankCard.create({
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate,
        userId,
      },
    });
    res.json(newUser);
  } catch {}
};

export const fetchBankCards = async (req: Request, res: Response) => {
  const bankCards = await prisma.bankCard.findMany();
  res.json(bankCards);
};
