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
exports.fetchDonorProfile = void 0;
const __1 = require("../..");
const fetchDonorProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.donorId;
    const donorProfile = yield __1.prisma.profile.findUnique({
        where: {
            userId: id,
        },
    });
    res.json(donorProfile);
});
exports.fetchDonorProfile = fetchDonorProfile;
