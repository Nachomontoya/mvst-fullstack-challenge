import { timeController } from "../controllers";
import { Router } from "express";

export const timerRouter = Router();

timerRouter.get("", timeController.getTotalTime);
timerRouter.put("/update/:id", timeController.updateTotalTime);
