import { Request, Response, Router } from "express";
export const bankCardRouter = Router();

import {
  createBankCard,
} from "../controllers/bank-card/create-bankcard";
import { editBankCard } from "../controllers/bank-card/edit-bankcard";
import { fetchBankCards } from "../controllers/bank-card/fetch-bankcard";

bankCardRouter.post("/:id", createBankCard);
bankCardRouter.get("/:id", fetchBankCards);
bankCardRouter.patch("/:bankCardId",editBankCard) 