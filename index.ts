import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addBankAccount = async () => {
  const newAccount = await prisma.bankCard.create({
    data: {
      country: "Mongolia",
      firstName: "Amgalanbaatar",
      lastName: "Surenjav",
      cardNumber: "1234 1234 1234 1234",
      expiryDate: new Date("2020-07-10"),
      userId: "1asdfkwe12",
    },
  });
  console.log(newAccount);
};
// addBankAccount()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
addBankAccount();
