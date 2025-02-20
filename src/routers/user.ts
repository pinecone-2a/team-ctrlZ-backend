import { Request, Response, Router } from "express";
export const userRouter = Router();

import { createUser, fetchUsers } from "../controllers/user/create-user";
import { signinController } from "../controllers/user/sign-in-controller";
import { forgotPassword } from "../controllers/forgot-password/forgot-password";

userRouter.post("/sign-in", signinController);
userRouter.post("/sign-up", createUser);
userRouter.post("/forgot-password", forgotPassword);

import { resetpassword } from "../controllers/user/reset-password";
userRouter.post("/reset-password", resetpassword);
