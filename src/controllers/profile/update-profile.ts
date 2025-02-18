import { Request, Response } from "express";
import { prisma } from "../..";

export const updateProfile = async (req: Request, res: Response)=> {
    try {
        const { profileId } =req.params;
        const { avatarImage, name, about, socialMediaURL } = req.body;

        const updatedUser = await prisma.profile.update({
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
    } catch (error) {
        res.send(error);
     }
};
