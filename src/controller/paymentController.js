// controllers/paymentController.js
import Payment from "../models/Payment.js";
import FlightBooking from "../models/FlightBooking.js";
import HotelBooking from "../models/HotelBooking.js";

export const makePayment = async (req, res) => {
  try {
    const { userId, bookingType, bookingId, amount } = req.body;

    if (!["flight", "hotel"].includes(bookingType)) {
      return res.status(400).json({ error: "Invalid booking type" });
    }

    // Create payment record
    const payment = await Payment.create({
      user: userId,
      bookingType,
      bookingId,
      amount,
      status: "completed", // for now we mock as successful
    });

    // Update booking status
    if (bookingType === "flight") {
      await FlightBooking.findByIdAndUpdate(bookingId, { status: "paid" });
    } else {
      await HotelBooking.findByIdAndUpdate(bookingId, { status: "paid" });
    }

    res.status(201).json({ message: "Payment successful", payment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
