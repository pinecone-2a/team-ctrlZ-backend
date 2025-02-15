import { Request, Response, Router } from "express";

import { prisma } from "../..";

export const editBankCard = async (req: Request, res: Response) => {
try {
    const { id } = req.params;
    const updatedCard = await prisma.bankCard.update({
      where: {
        id,
      },
      data: {
          cardNumber:"123412341234"
      }
    });
    res.send({
        message: "Bankcard updated succesfully",
        data :updatedCard
    });
}
catch(e) {
    res.send(e)
}

};