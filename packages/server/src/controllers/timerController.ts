import { Request, Response, NextFunction } from "express";
import * as db from "../models";

async function getTotalTime(req: Request, res: Response, next: NextFunction) {
  try {
    const totalTime = await db.Timer.aggregate([
      {
        $group: {
          _id: 1,
          time: { $sum: "$time" },
        },
      },
    ]);
    res.status(200).send({ totalTime });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function updateTotalTime(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { timer } = req.body;
    const data = await db.Timer.findOneAndUpdate({}, { time: timer });
    res.status(200).send({ data });
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
    res.status(200).send({ newTimer });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

export { getTotalTime, updateTotalTime, createNewTime };
