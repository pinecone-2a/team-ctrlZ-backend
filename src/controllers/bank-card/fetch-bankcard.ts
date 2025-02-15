import { Request, Response, Router } from "express";

import { prisma } from "../..";

export const fetchBankCard = async (req: Request, res: Response) => {
    const { id } = req.params;
    const bankCards = await prisma.bankCard.findUnique({
      where: {
        userId: id,
      },
    });
    res.json(bankCards);
  };
  