import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import express, { Request, Response } from "express";
import { userRouter } from "./controllers/create-user";
const cors = require("cors");
const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth/sign-up", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

// const addBankAccount = async () => {
//   const newAccount = await prisma.bankCard.create({
//     data: {
//       country: "Mongolia",
//       firstName: "Amgalanbaatar",
//       lastName: "Surenjav",
//       cardNumber: "1234 1234 1234 1234",
//       expiryDate: new Date("2020-07-10"),
//       userId: "1asdfkwe12",
//     },
//   });
//   console.log(newAccount);
// };
// addBankAccount()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
