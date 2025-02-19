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
exports.updateProfile = void 0;
const __1 = require("../..");
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { profileId } = req.params;
    const { avatarImage, name, about, socialMediaURL } = req.body;
    try {
        const updatedUser = yield __1.prisma.profile.update({
            where: {
                id: profileId
            },
            data: {
                avatarImage,
                name,
                about,
                socialMediaURL,
            }
        });
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.updateProfile = updateProfile;
