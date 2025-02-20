import { Request, Response, Router } from "express";
export const userRouter = Router();

import { signinController } from "../src/controllers/user/sign-in-controller";
import { createUser } from "../src/controllers/user/create-user";
import { forgotPassword } from "../src/controllers/forgot-password/forgot-password";

userRouter.post("/sign-in", signinController);
userRouter.post("/sign-up", createUser);
userRouter.post("/forgot-password");
userRouter.post("/uptade", forgotPassword);
