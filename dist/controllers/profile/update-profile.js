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
    const { userId } = req.params;
    const { image, name, about, socialMedia } = req.body;
    try {
        const updatedUser = yield __1.prisma.profile.update({
            where: {
                userId,
            },
            data: {
                avatarImage: image,
                name,
                about: about,
                socialMediaURL: socialMedia,
            },
        });
        res.json({
            success: true,
            message: "Updated Successfully",
            code: "PROFILE_UPDATED_SUCCESSFULLY",
            data: updatedUser,
        });
    }
    catch (error) {
        res.status(500).json({ message: error });
        console.log(error);
    }
});
exports.updateProfile = updateProfile;
