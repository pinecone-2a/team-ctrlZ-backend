import { Request, Response } from "express";
import { prisma } from "../..";

const bcrypt = require("bcrypt");

export const resetpassword = async (req: Request, res: Response) => {
  const saltRounds = 10;
  const { email, password } = req.body;
  const hashedPass = bcrypt.hashSync(password, saltRounds);
  try {
    const updatedUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        password: hashedPass,
      },
    });
    res.json(updatedUser);
  } catch (e) {
    res.send(e);
  }
};
