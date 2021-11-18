import { app } from "./server";
import { config } from "./config";
import { connect } from "./db/connect";

connect()
  .then(async () => {
    app.listen(config.app.port, () => {
      console.log(`Server running at port ${config.app.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
