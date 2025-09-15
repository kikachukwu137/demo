// models/Payment.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookingType: { type: String, enum: ["flight", "hotel"], required: true },
  bookingId: { type: mongoose.Schema.Types.ObjectId, required: true },
  amount: Number,
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Payment", paymentSchema);


//demo