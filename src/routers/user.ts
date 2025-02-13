import { Request, Response, Router } from "express";
export const userRouter = Router();

import { createUser, fetchUsers } from "../controllers/user/create-user";
import { signinController } from "../controllers/user/sign-in-controller";

userRouter.post("/sign-in", signinController);
userRouter.post("/sign-up", createUser);
