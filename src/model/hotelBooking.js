// models/HotelBooking.js
import mongoose from "mongoose";

const hotelBookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hotelName: String,
  checkIn: Date,
  checkOut: Date,
  guests: { type: Number, default: 1 },
  status: {
    type: String,
    enum: ["pending", "confirmed", "paid", "cancelled"],
    default: "confirmed",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("HotelBooking", hotelBookingSchema);
