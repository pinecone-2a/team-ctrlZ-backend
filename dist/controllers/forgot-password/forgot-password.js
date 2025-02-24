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
exports.forgotPassword = void 0;
const __1 = require("../..");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "teamctrlz2@gmail.com",
        pass: "gjro kfog defk ftfh",
    },
});
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const user = yield __1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (user) {
            const otp = Math.floor(Math.random() * 899999 + 100000);
            yield __1.prisma.otp.create({
                data: {
                    email,
                    otp,
                    createdAt: new Date(),
                },
            });
            const info = yield transporter.sendMail({
                from: '"Buy me coffee" <teamctrlz2@gmail.com>',
                to: email,
                subject: "Buy me a coffee OTP",
                html: `<div style="max-width:600px;margin:20px auto;background:#fff;padding:20px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.1);text-align:center;font-family:Arial,sans-serif;">
    <div style="font-size:24px;font-weight:bold;color:#ff9900;"> ☕ BuyMeCoffee</div>
    <h2>Verify Your Email</h2>
    <p>Use the OTP below to reset your password:</p>
    <div style="font-size:28px;font-weight:bold;color:#333;background:#f8f8f8;padding:10px 20px;display:inline-block;border-radius:5px;margin:20px 0;">${otp}</div>
    <p>If you didn't request this, ignore this email.</p>
    <div style="font-size:12px;color:#777;margin-top:20px;">&copy; 2025 BuyMeCoffee TeamCtrlZ. All rights reserved.</div>
</div>
`,
            });
            res.json({
                code: "SENT_OTP",
                data: null,
                message: "OTP sent successfully",
                success: true,
            });
            console.log("Message sent: %s", info.messageId);
        }
        else {
            res.status(404).json({
                code: "USER_NOT_FOUND",
                data: null,
                message: "User doesn't exist",
                success: false,
            });
        }
    }
    catch (error) {
        console.error("Error sending OTP:", error);
        res.status(500).json({
            code: "SERVER_ERROR",
            data: null,
            message: "Internal server error",
            success: false,
        });
    }
});
exports.forgotPassword = forgotPassword;
const requestOTP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, userOtp } = req.body;
    try {
        const user = yield __1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (user) {
            const otpRecord = yield __1.prisma.otp.findFirst({
                where: {
                    email,
                    otp: Number(userOtp),
                },
            });
            if (otpRecord) {
                const otpAge = (new Date().getTime() - otpRecord.createdAt.getTime()) / 1000 / 60;
                if (otpAge < 5) {
                    res.json({
                        code: "OTP_Verified",
                        data: null,
                        message: "Successfully verified OTP",
                        success: true,
                    });
                }
                else {
                    res.json({
                        code: "OTP_EXPIRED",
                        data: null,
                        message: "OTP has expired",
                        success: false,
                    });
                }
            }
            else {
                res.json({
                    code: "OTP_INCORRECT",
                    data: null,
                    message: "Incorrect OTP",
                    success: false,
                });
            }
        }
        else {
            res.status(404).json({
                code: "USER_NOT_FOUND",
                data: null,
                message: "User doesn't exist",
                success: false,
            });
        }
    }
    catch (error) {
        console.error("Error verifying OTP:", error);
        res.status(500).json({
            code: "SERVER_ERROR",
            data: null,
            message: "Internal server error",
            success: false,
        });
    }
});
