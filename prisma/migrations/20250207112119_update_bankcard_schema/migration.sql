/*
  Warnings:

  - The primary key for the `BankCard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Donation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "BankCard" DROP CONSTRAINT "BankCard_userId_fkey";

-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_donorId_fkey";

-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_recipentId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "BankCard" DROP CONSTRAINT "BankCard_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "BankCard_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "BankCard_id_seq";

-- AlterTable
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "recipentId" SET DATA TYPE TEXT,
ALTER COLUMN "donorId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Donation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Donation_id_seq";

-- AlterTable
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Profile_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "BankCard" ADD CONSTRAINT "BankCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_recipentId_fkey" FOREIGN KEY ("recipentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
