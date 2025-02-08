import { Request, Response, Router } from "express";
export const profileRouter = Router();

import {
  createProfile,
  fetchProfile,
} from "../controllers/profile/create-profile";

profileRouter.get("/:id", fetchProfile);
profileRouter.post("/", createProfile);
