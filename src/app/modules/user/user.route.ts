import { Router } from "express";

const router = Router();

router.post("create-student", userController.createStudent);

export const userRoute = router;
