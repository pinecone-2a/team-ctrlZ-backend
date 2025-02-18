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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBackground = void 0;
const __1 = require("../..");
const addBackground = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { backgroundImage } = req.body;
    console.log("hello");
    try {
        const newBackgroundImage = yield __1.prisma.profile.update({
            where: {
                userId,
            },
            data: {
                backgroundImage,
            },
        });
        res.status(201).json({
            code: "BACKGROUND_CREATED_SUCCESSFULLY",
            success: true,
            message: "Background created successfully",
            data: newBackgroundImage,
        });
    }
    catch (e) {
        res.send(e);
    }
});
exports.addBackground = addBackground;
