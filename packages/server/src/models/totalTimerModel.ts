import mongoose, { Schema } from "mongoose";

const totalTimerSchema = new Schema(
  {
    totalTime: {
      type: Number,
      trim: true,
      required: [true, "time is required"],
    },
  },
  {
    timestamps: true,
  },
);

export const TotalTimer = mongoose.model("total-timer", totalTimerSchema);
