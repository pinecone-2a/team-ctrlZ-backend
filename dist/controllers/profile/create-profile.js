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
exports.createProfile = void 0;
const __1 = require("../..");
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, about, avatarImage, socialMediaURL } = req.body;
    try {
        const newProfile = yield __1.prisma.profile.create({
            data: {
                name,
                about,
                avatarImage,
                socialMediaURL,
                userId: id,
            },
        });
        res.status(201).json({
            code: "PROFILE_CREATED_SUCCESSFULLY",
            success: true,
            message: "Profile created successfully",
            data: newProfile,
        });
    }
    catch (e) {
        res.send(e);
    }
});
exports.createProfile = createProfile;
