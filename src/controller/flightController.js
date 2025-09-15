// controllers/flightController.js
import FlightBooking from "../model/flightBooking.js";
import User from "../model/user.model.js";

export const bookFlight = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, from, to, date, passengers } = req.body;

    // find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        agreedToTerms: true,
        isGuest: true,
      });
    }

    const flight = await FlightBooking.create({
      user: user._id,
      from,
      to,
      date,
      passengers,
    });

    res.status(201).json({ message: "Flight booked successfully", flight });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
