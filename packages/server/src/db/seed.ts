import * as db from "../models";

import getSeedTimerLog from "./timerLogSeed";
import getSeedTotalTimer from "./totalTimerSeed";

export async function seedTimerLog() {
  const results = await getSeedTimerLog();

  await db.TimerLog.deleteMany({});
  await db.TimerLog.create(results);
}

export async function seedTotalTimer() {
  const results = await getSeedTotalTimer();

  await db.TotalTimer.deleteMany({});
  await db.TotalTimer.create(results);
}
