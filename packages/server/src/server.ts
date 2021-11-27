import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
// import rateLimit from "express-rate-limit";
import { timerRouter } from "./routes";

export const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
// app.use(
//   rateLimit({
//     windowMs: 60 * 60 * 1000,
//     max: 100,
//     message: "You exceeded 100 requests in an hour limit!",
//     headers: true,
//   })
// );

app.use("/timer", timerRouter);

app.get("/", function (req, res) {
  res.status(200).send({
    author: "Nacho Montoya",
    version: "1.0.0",
    description: "This is the back for the MVST challenge",
  });
});
