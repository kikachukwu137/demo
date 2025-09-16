import { Router } from 'express';
import { bookHotel } from '../controller/hotelController.js';

const hotelRouter = Router();

// Guest can book hotel without login
hotelRouter.post('/bookHotel', bookHotel);

export default hotelRouter;
