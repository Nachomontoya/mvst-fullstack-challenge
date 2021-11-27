import { Request, Response, NextFunction } from "express";
import * as db from "../models";

async function getTotalTime(req: Request, res: Response, next: NextFunction) {
  try {
    const totalTime = await db.TotalTimer.find();
    res.status(200).send({ message: "Total time loaded", totalTime });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function updateTotalTime(
  newTime: number,
  res: Response,
  next: NextFunction,
) {
  try {
    await db.TotalTimer.findOneAndUpdate({}, { $inc: { totalTime: newTime } });
    res.status(200).send({ message: "Total time succesfully updated" });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function createNewTimeLog(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { timer } = req.body;
    const newTimer = await db.TimerLog.create({ time: timer });
    updateTotalTime(timer, res, next);
    res
      .status(200)
      .send({ message: "New timer successfully created", newTimer });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

export { getTotalTime, createNewTimeLog };
