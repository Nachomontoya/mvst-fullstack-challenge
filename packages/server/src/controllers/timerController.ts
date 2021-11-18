import { Request, Response, NextFunction } from "express";
import * as db from "../models";

async function getTotalTime(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await db.Timer.find();
    res.status(200).send({ data });
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

export { getTotalTime, updateTotalTime };
