import { Request, Response, NextFunction } from "express";
import * as db from "../models";

async function getAllTimers(req: Request, res: Response, next: NextFunction) {
  try {
    const timers = await db.Timer.find();
    res.status(200).send({ message: "All Timers Loaded", timers });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function getTotalTime(req: Request, res: Response, next: NextFunction) {
  try {
    const totalTime = await db.Timer.aggregate([
      {
        $group: {
          _id: null,
          totalTime: { $sum: "$time" },
        },
      },
    ]);

    res
      .status(200)
      .send({ message: "Total time summarized and loaded", totalTime });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function createNewTime(req: Request, res: Response, next: NextFunction) {
  try {
    const { timer } = req.body;
    const newTimer = await db.Timer.create({ time: timer });
    res
      .status(200)
      .send({ message: "New timer successfully created", newTimer });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

export { getTotalTime, createNewTime, getAllTimers };
