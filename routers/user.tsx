import { Request, Response, Router } from "express";
export const userRouter = Router();

import { createUser, fetchUsers } from "../controllers/user/create-user";

userRouter.get("/", fetchUsers);
userRouter.post("/", createUser);
