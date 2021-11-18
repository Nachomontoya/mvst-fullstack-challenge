import mongoose, { Schema } from "mongoose";

const timerSchema = new Schema(
  {
    time: {
      type: Number,
      trim: true,
      required: [true, "time is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Timer = mongoose.model("timer", timerSchema);
