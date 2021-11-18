import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.get("/", function (req, res) {
  res.status(200).send({
    author: "Nacho Montoya",
    version: "1.0.0",
    description: "This is the back for the MVST challenge",
  });
});
