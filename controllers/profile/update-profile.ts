import { Request, Response } from "express";
import { prisma } from "../..";
export const updateProfile = async (req: Request, res: Response)=> {
    const {profileId} =req.params
    const {avatarImage,name,about,socialMediaURL} = req.body
    try {
        const updatedUser = await prisma.profile.update({
            where: {
                id:profileId
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
    res.status(500).json({message:"Internal server error"})
}
}