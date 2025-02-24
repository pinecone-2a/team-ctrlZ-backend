"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
const express_1 = __importDefault(require("express"));
const bankcard_1 = require("./routers/bankcard");
const user_1 = require("./routers/user");
const profile_1 = require("./routers/profile");
const dotenv_1 = __importDefault(require("dotenv"));
const donation_1 = require("./routers/donation");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const PORT = 4000;
const app = (0, express_1.default)();
app.options("*", (0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: [
        "https://team-ctrl-z-frontend.vercel.app",
        "http://localhost:3000",
    ],
    credentials: true,
}));
app.use(express_1.default.json());
app.use("/auth", user_1.userRouter);
app.use("/bank-card", bankcard_1.bankCardRouter);
app.use("/profile", profile_1.profileRouter);
app.use("/donation", donation_1.donationRouter);
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});
