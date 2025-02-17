import { Request, Response, Router } from "express";
import { prisma } from "../..";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "./generateAccessToken";

const bcrypt = require("bcrypt");

const isUserexist = async (field: any) => {
  return await prisma.user.findUnique({
    where: field,
  });
};
export const createUser = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  const saltRounds = 10;

  const isUserExist = await isUserexist({ email });
  if (isUserExist) {
    res.status(409).json({
      success: false,
      code: "USER_ALREADY_EXISTS",
      message: "User already exists",
      data: null,
    });
  }
  if (!isUserExist) {
    const hashedPass = bcrypt.hashSync(password, saltRounds);
    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPass,
          username,
        },
      });
      const refreshToken = jwt.sign(
        { userId: newUser.id },
        process.env.REFRESH_TOKEN_SECRET!,
        {
          expiresIn: "24h",
        }
      );
      const accessToken = generateAccessToken(newUser.id);
      res
        .cookie("accessToken", accessToken, {
          sameSite: "strict",
        })
        .cookie("refreshToken", refreshToken, {
          sameSite: "strict",
        })
        .status(201)
        .json({
          success: true,
          code: "SUCCESS",
          message: "User created successfully",
          data: newUser,
        });
    } catch (e) {
      res.send(e);
      console.log(e);
    }
  }
};

/// GET auth/checkuername?username=username
//   const isUserExist = await isUserexist({ username });

/// POST auth/checkuername?username=username

export const fetchUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};
