import { Request, Response, Router } from "express";
export const profileRouter = Router();

import { createProfile } from "../controllers/profile/create-profile";
import { fetchCurrentUser } from "../controllers/profile/get-current-user";
import { fetchUser } from "../controllers/profile/fetch-user";
import { updateProfile } from "../controllers/profile/update-profile";
import { fetchAllusers } from "../controllers/profile/fetch-allUsers";
import { addBackground } from "../controllers/profile/add-backgroundImage";

profileRouter.put("/:userId", addBackground);
profileRouter.get("/explore", fetchAllusers);
profileRouter.get("/:id", fetchCurrentUser);
profileRouter.get("/view/:username", fetchUser);
profileRouter.post("/:id", createProfile);
profileRouter.put("/:profileId", updateProfile);
