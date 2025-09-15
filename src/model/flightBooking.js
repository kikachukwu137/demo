// models/FlightBooking.js
import mongoose from "mongoose";

const flightBookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  from: String,
  to: String,
  date: Date,
  passengers: { type: Number, default: 1 },
  status: {
    type: String,
    enum: ["pending", "confirmed", "paid", "cancelled"],
    default: "confirmed",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("FlightBooking", flightBookingSchema);
