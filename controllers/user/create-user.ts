import { Request, Response, Router } from "express";
import { prisma } from "../..";
import e from "cors";
const bcrypt = require("bcrypt");
export const createUser = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  const saltRounds = 10;
  const hashedPass = bcrypt.hashSync(password, saltRounds);
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPass,
        username,
      },
    });
    res.status(201).json({
      success: true,
      code: "SUCCESS",
      messega: "User created successfully",
      data: newUser,
    });
  } catch (e) {
    res.send(e);
    console.log(e);
  }
};
export const fetchUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};
