import mongoose from "mongoose";

import { config } from "../config";

export function connect() {
  return mongoose.connect(config.db.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}
