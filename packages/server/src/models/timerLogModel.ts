import mongoose, { Schema } from "mongoose";

const timerLogSchema = new Schema(
  {
    time: {
      type: Number,
      trim: true,
      required: [true, "time is required"],
    },
  },
  {
    timestamps: true,
  },
);

export const TimerLog = mongoose.model("timer-log", timerLogSchema);
