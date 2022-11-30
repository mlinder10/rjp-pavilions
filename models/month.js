import mongoose from "mongoose";
import { registrationSchema } from "./registration";

const monthSchema = new mongoose.Schema({
  name: String,
  days: Number,
  gap: Number,
  registrations: {
    type: [registrationSchema],
    default: [],
  },
});

export default mongoose.models.Month || mongoose.model("Month", monthSchema);
