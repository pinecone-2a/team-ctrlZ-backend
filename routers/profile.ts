import { Request, Response, Router } from "express";
export const profileRouter = Router();

import {
  createProfile,
} from "../controllers/profile/create-profile";
import { fetchCurrentUser } from "../controllers/profile/get-current-user";

profileRouter.get("/:id", fetchCurrentUser);
// profileRouter.get("/view/:username",fetchUsers)
profileRouter.post("/:id", createProfile);
