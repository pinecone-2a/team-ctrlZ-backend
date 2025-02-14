// import { Prisma } from "@prisma/client";
// import { prisma } from "../..";
// import { Request, Response } from "express";
// export const forgotPassword = async (req: Request, res: Response) => {
//   const { email } = req.body;
//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });
//   if (user) {
//     const otp = Math.floor(Math.random() * 899999 + 100000);
//   }
// };
