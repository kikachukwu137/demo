import { Router } from 'express';
import { bookFlight } from '../controller/flightController.js';


const flightRouter = Router();

// Guest can book flight without login
flightRouter.post('/flight', bookFlight);



export default flightRouter;
