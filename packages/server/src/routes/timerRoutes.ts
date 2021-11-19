import { timeController } from "../controllers";
import { Router } from "express";

export const timerRouter = Router();

timerRouter.get("", timeController.getTotalTime);
timerRouter.get("/all", timeController.getAllTimers);
timerRouter.post("/new", timeController.createNewTime);
