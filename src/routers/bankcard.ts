import { Request, Response, Router } from "express";
export const bankCardRouter = Router();

import { createBankCard } from "../controllers/bank-card/create-bankcard";
import { editBankCard } from "../controllers/bank-card/edit-bankcard";
import { fetchBankCard } from "../controllers/bank-card/fetch-bankcard";

bankCardRouter.put("/:bankCardId", editBankCard);
bankCardRouter.post("/:id", createBankCard);
bankCardRouter.get("/:id", fetchBankCard);
<<<<<<< HEAD
bankCardRouter.patch("/:id",editBankCard) 
=======

export default bankCardRouter;
>>>>>>> 5ebf983fd8e24d61894d7d5dae4519e83d2e7431
