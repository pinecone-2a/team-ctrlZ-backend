import { Request, Response, Router } from "express";
export const donationRouter = Router();

import { createDonation } from "../controllers/donation/create-donation";
import { fetchReceivedDonation } from "../controllers/donation/fetch-received-donation";

donationRouter.get("/:id", fetchReceivedDonation);
donationRouter.post("/create-donation", createDonation);
