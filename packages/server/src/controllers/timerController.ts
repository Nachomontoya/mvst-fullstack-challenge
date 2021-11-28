import { Request, Response, NextFunction } from "express";
import * as db from "../models";

async function getTotalTime(req: Request, res: Response, next: NextFunction) {
  try {
    const totalTime = await db.TotalTimer.find();
    res.status(200).send({ message: "Total time loaded", totalTime });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

// async function updateTotalTime(newTime: number) {
//   await db.TotalTimer.findOneAndUpdate({}, { $inc: { totalTime: newTime } });
// }

async function createNewTimeLog(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { timer } = req.body;
    const newTimer = await db.TimerLog.create({ time: timer });
    await db.TotalTimer.findOneAndUpdate({}, { $inc: { totalTime: timer } });
    // await updateTotalTime(timer);
    res.status(200).send({
      message: "New timer successfully created and total time updated",
      newTimer,
    });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

export { getTotalTime, createNewTimeLog };
