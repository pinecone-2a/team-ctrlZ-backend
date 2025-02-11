import { prisma } from "../..";
import { Request, Response } from "express";
const bcrypt = require("bcrypt");
export const signinController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    res.status(409).json({
      success: false,
      code: "User doesn't exist",
      messega: "USER_DOESNT_EXIST",
      data: null,
    });
    return;
  }

  const isValid = bcrypt.compareSync(password, user.password);
  if (isValid) {
    res.json({
      success: true,
      code: "Succesfully signed in",
      messega: "Signed in",
      data: {},
    });
    return;
  }
  if (!isValid) {
    res.json({
      success: false,
      code: "Incorrect Password",
      messega: "PASSWORD_INCORRECT",
      data: null,
    });
    return;
  }
};
