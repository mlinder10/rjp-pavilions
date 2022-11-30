import mongoose from "mongoose";
export const registrationSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
  partySize: Number,
  arrivalTime: String,
  departureTime: String,
  organizationName: String,
  month: String,
  day: Number,
  shelterRequested: String,
  affilliation: String,
  price: Number,
  approved: Boolean,
});

export default mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);
