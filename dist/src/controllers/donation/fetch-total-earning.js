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
exports.fetchTotalEarnings = void 0;
const __1 = require("../..");
const fetchTotalEarnings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId; // Extract user ID from request parameters
    try {
        const donations = yield __1.prisma.donation.findMany({
            where: {
                recipentId: id,
            },
        });
        console.log({ id });
        const totalEarnings = donations.reduce((total, donation) => {
            return total + (donation.amount || 0);
        }, 0);
        res.json({
            totalEarnings,
        });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch total donations" });
    }
});
exports.fetchTotalEarnings = fetchTotalEarnings;
