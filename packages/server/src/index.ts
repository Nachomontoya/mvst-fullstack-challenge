import { app } from "./server";
import { config } from "./config";
import { connect } from "./db/connect";

import { seedTimerLog, seedTotalTimer } from "./db/seed";

connect()
  .then(async () => {
    app.listen(config.app.port, () => {
      console.log(`Server running at port ${config.app.port}`);
    });

    seedTimerLog();
    seedTotalTimer();
  })
  .catch((err) => {
    console.log(err);
  });
