import { Request, Response, Router } from "express";
export const bankCardRouter = Router();
import { Prisma } from "@prisma/client";
import { prisma } from "../..";

bankCardRouter.get("/", async (req: Request, res: Response) => {});

bankCardRouter.post("/", async (req: Request, res: Response) => {
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
});
