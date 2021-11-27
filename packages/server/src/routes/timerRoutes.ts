import { timerController } from "../controllers";
import { Router } from "express";

export const timerRouter = Router();

timerRouter.get("", timerController.getTotalTime);
timerRouter.post("/new", timerController.createNewTimeLog);
