import { Request, Response, Router } from "express";
import { prisma } from "../..";

export const createUser = async (req: Request, res: Response) => {
  const {
    amount,
    specialMessage,
    socialURLOrBuyMeACoffee,
    donorId,
    recipentId,
  } = req.body;
  try {
    const newDonation = await prisma.donation.create({
      data: {
        amount,
        specialMessage,
        socialURLOrBuyMeACoffee,
        donorId,
        recipentId,
      },
    });
    res.json(newDonation);
  } catch (e) {
    res.send(e);
    console.log(e);
  }
};
// export const fetchReceivedDonation = async (req: Request, res: Response) => {
//     const {id}=
//   const users = await prisma.user.findUnique();
//   res.json(users);
// };
