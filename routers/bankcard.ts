import { Request, Response, Router } from "express";
export const bankCardRouter = Router();

import {
  createBankCard,
  // fetchBankCards,
} from "../controllers/bank-card/create-bankcard";

bankCardRouter.post("/", createBankCard);
bankCardRouter.get("/:id", fetchBankCards);
