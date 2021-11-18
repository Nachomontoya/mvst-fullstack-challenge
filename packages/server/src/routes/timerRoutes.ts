import { getTotalTime } from "../controllers";
import { Router } from "express";

export const timerRouter = Router();

timerRouter.get("", getTotalTime);
