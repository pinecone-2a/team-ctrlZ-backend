import { Request, Response, Router } from "express";

import { prisma } from "../..";

export const createBankCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, country, firstName, lastName, cardNumber, expiryDate } =
    req.body;
  try {
    const newBankcard = await prisma.bankCard.create({
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate: new Date(expiryDate),
        userId,
      },
    });
    res.json(newBankcard);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
<<<<<<< HEAD
export const fetchBankCards = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bankCards = await prisma.bankCard.findUnique({
    where: {
      userId: id,
    },
  });
  res.json(bankCards);
};
=======
// export const fetchBankCards = async (req: Request, res: Response) => {
//   const bankCards = await prisma.bankCard.findUnique({
//     where: {
//       id: 1
//     }
//   });
//   res.json(bankCards);
// };
>>>>>>> 4e1cb9e5c110ee813aee477e6972fdb87910f641
