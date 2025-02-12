import { Request, Response } from "express";
import { prisma } from "../..";
export const fetchUser = async (req: Request, res: Response)=> {
    try {
        const { username } = req.params;
        const user = await prisma.user.findUnique({
          where: {
            username,
          },
          include: {
              profile: true
          }
          
        });
        if (!user) {
           res.status(404).json({ message: "User not found" });
           return
        }
        res.json(user);
    }
  catch (error) {
    res.status(500).json({message:"Internal server error"})
  }
};