import { Request, Response, Router } from "express";
export const userRouter = Router();

import { signinController } from "../src/controllers/user/sign-in-controller";
import { createUser } from "../src/controllers/user/create-user";

userRouter.post("/sign-in", signinController);
userRouter.post("/sign-up", createUser);
