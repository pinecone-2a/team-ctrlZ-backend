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
exports.createBankCard = exports.fetchBankCards = void 0;
const __1 = require("../..");
const fetchBankCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bankCards = yield __1.prisma.bankCard.findUnique({
        where: {
            userId: id,
        },
    });
    res.json(bankCards);
});
exports.fetchBankCards = fetchBankCards;
const createBankCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { country, firstName, lastName, cardNumber, expiryDate } = req.body;
    try {
        const newBankcard = yield __1.prisma.bankCard.create({
            data: {
                country,
                firstName,
                lastName,
                cardNumber,
                expiryDate: new Date(expiryDate),
                userId: id,
            },
        });
        res.json(newBankcard);
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
});
exports.createBankCard = createBankCard;
