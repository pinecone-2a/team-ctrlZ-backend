"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinController = void 0;
const bcrypt = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAccessToken_1 = require("./generateAccessToken");
const __1 = require("../..");
const signinController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield __1.prisma.user.findUnique({
        where: {
            email,
        },
        include: {
            profile: true,
            bankCard: true,
        },
    });
    if (!user) {
        res.status(409).json({
            success: false,
            code: "User doesn't exist",
            message: "USER_DOESNT_EXIST",
            data: null,
        });
        return;
    }
    if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        if (isValid) {
            const refreshToken = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: "24h",
            });
            const accessToken = (0, generateAccessToken_1.generateAccessToken)(user.id);
            console.log(accessToken);
            res.json({
                success: true,
                code: "signed in",
                message: "Signed in",
                data: { user, naraa: "test", accessToken, refreshToken },
            });
            return;
        }
        res.json({
            success: false,
            code: "Incorrect Password",
            message: "PASSWORD_INCORRECT",
            data: null,
        });
        return;
    }
});
exports.signinController = signinController;
