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
    const { id } = req.params;
    const timerUpdated = req.body;
    const data = await db.Timer.findByIdAndUpdate(id, timerUpdated, {
      new: true,
    });

    res.status(200).send({ data });
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

export { getTotalTime, updateTotalTime };
