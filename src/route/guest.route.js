import { Router } from 'express';
import { bookFlight } from '../controller/flightController.js';
import { bookHotel } from '../controller/hotelController.js';

const guestRouter = Router();

// Guest can book flight without login
guestRouter.post('/bookFlight', bookFlight);

// Guest can book hotel without login
guestRouter.post('/bookHotel', bookHotel);

export default guestRouter;
