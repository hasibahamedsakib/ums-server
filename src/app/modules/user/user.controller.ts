import { Request, Response } from "express";
import { userService } from "./user.service";

const createUserController = async (req: Request, res: Response) => {
  const result = await userService.createUserIntoDB(req.body);
  res.send.json({
    message: "tut tut",
  });
};
