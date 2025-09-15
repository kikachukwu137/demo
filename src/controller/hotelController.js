// controllers/hotelController.js
import HotelBooking from "../model/hotelBooking.js";
import User from "../model/user.model.js";

export const bookHotel = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, hotelName, checkIn, checkOut, guests } = req.body;

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

    const hotel = await HotelBooking.create({
      user: user._id,
      hotelName,
      checkIn,
      checkOut,
      guests,
    });

    res.status(201).json({ message: "Hotel booked successfully", hotel });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
