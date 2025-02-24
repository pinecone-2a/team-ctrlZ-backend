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
exports.fetchUsers = exports.createUser = void 0;
const __1 = require("../..");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAccessToken_1 = require("./generateAccessToken");
const bcrypt = require("bcrypt");
const isUserexist = (field) => __awaiter(void 0, void 0, void 0, function* () {
    return yield __1.prisma.user.findUnique({
        where: field,
    });
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, username } = req.body;
    const saltRounds = 10;
    const isUserExist = yield isUserexist({ email });
    if (isUserExist) {
        res.status(409).json({
            success: false,
            code: "USER_ALREADY_EXISTS",
            message: "User already exists",
            data: null,
        });
    }
    if (!isUserExist) {
        const hashedPass = bcrypt.hashSync(password, saltRounds);
        try {
            const newUser = yield __1.prisma.user.create({
                data: {
                    email,
                    password: hashedPass,
                    username,
                },
            });
            const refreshToken = jsonwebtoken_1.default.sign({ userId: newUser.id }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: "24h",
            });
            const accessToken = (0, generateAccessToken_1.generateAccessToken)(newUser.id);
            res.status(201).json({
                success: true,
                code: "SUCCESS",
                message: "User created successfully",
                data: newUser,
                result: accessToken,
                refreshToken: refreshToken,
            });
        }
        catch (e) {
            res.send(e);
            console.log(e);
        }
    }
});
exports.createUser = createUser;
/// GET auth/checkuername?username=username
//   const isUserExist = await isUserexist({ username });
/// POST auth/checkuername?username=username
const fetchUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield __1.prisma.user.findMany();
    res.json(users);
});
exports.fetchUsers = fetchUsers;
