"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
exports.userRouter = (0, express_1.Router)();
const create_user_1 = require("../controllers/user/create-user");
const sign_in_controller_1 = require("../controllers/user/sign-in-controller");
exports.userRouter.post("/sign-in", sign_in_controller_1.signinController);
exports.userRouter.post("/sign-up", create_user_1.createUser);
