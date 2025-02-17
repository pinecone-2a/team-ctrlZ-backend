import { Request, Response, Router } from "express";

import { prisma } from "../..";

export const editBankCard = async (req: Request, res: Response) => {
try {
    const { id } = req.params;
    const { country, firstName, lastName, cardNumber, expiryDate } = req.body;

    const updatedCard = await prisma.bankCard.update({
      where: {
        id,
      },
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate: new Date(expiryDate),
        userId: id,
      }
    });
    res.json(updatedCard);
    res.send({
        message: "Bankcard updated succesfully",
        data :updatedCard
    });
}
catch(e) {
  console.log(e);
    res.send(e)
}

};