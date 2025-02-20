import { Request, Response } from "express";
import { prisma } from "../..";

import bcrypt from "bcrypt";

export const resetPassword = async (req: Request, res: Response) => {
  const { email, newPassword } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(newPassword, salt);
    const updatedUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        password: hashedPass,
      },
    });
    res.status(200).json({
      code: "PASSWORD_UPDATED_SUCCESSFULLY",
      message: "Password updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
