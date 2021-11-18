import * as db from "../models";

import getSeedTimer from "./timerSeed";

export async function seedTimer() {
  const results = await getSeedTimer();

  await db.Timer.deleteMany({});
  await db.Timer.create(results);
}
