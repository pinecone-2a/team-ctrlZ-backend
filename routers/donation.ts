import { Request, Response, Router } from "express";
export const donationRouter = Router();

import { createDonation } from "../controllers/donation/create-donation";

donationRouter.get("/:id");
donationRouter.post("/create-donation", createDonation);
