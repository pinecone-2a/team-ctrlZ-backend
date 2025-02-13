import { Request, Response } from "express";
const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";
import { generateAccessToken } from "./generateAccessToken";
import { prisma } from "../..";
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
      message: "USER_DOESNT_EXIST",
      data: null,
    });
    return;
  }
  if (user) {
    const isValid = bcrypt.compareSync(password, user.password);
    if (isValid) {
      const refreshToken = jwt.sign(
        { userId: user.id },
        process.env.REFRESH_TOKEN_SECRET!,
        {
          expiresIn: "24h",
        }
      );

      const accessToken = generateAccessToken(user.id);
      res
        .cookie("accessToken", accessToken, {
          // httpOnly: true,
          sameSite: "strict",
        })
        .cookie("refreshToken", refreshToken, {
          // httpOnly: true,
          sameSite: "strict",
        })
        .json({
          success: true,
          code: "Succesfully signed in",
          message: "Signed in",
        });
      return;
    }
    res.json({
      success: false,
      code: "Incorrect Password",
      message: "PASSWORD_INCORRECT",
      data: null,
    });
    return;
  }
};
