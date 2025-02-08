import { Request, Response, Router } from "express";
import { prisma } from "../..";
import e from "cors";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: password,
        username: username,
      },
    });
    res.json(newUser);
  } catch (e) {
    res.send(e);
    console.log(e);
  }
};
export const fetchUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};
