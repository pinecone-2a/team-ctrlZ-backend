import { Request, Response, Router } from "express";
export const profileRouter = Router();

import {
  createProfile,
  fetchProfile,
} from "../controllers/profile/create-profile";

profileRouter.get("/", fetchProfile);
profileRouter.post("/", createProfile);
