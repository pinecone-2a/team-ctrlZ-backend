import { Request, Response, Router } from "express";
export const profileRouter = Router();

import { createProfile } from "../controllers/profile/create-profile";
import { fetchCurrentUser } from "../controllers/profile/get-current-user";
import { fetchUser } from "../controllers/profile/fetch-user";
import { fetchAllUsers } from "../controllers/profile/fetch-allUsers";
import { updateProfile } from "../controllers/profile/update-profile";

profileRouter.get("/:id", fetchCurrentUser);
profileRouter.get("/view/:username", fetchUser);
profileRouter.get("/explore", fetchAllUsers);
profileRouter.post("/:id", createProfile);
profileRouter.put("/:profileId", updateProfile);
