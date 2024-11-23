import express from 'express';
import { CarControllers } from './car.controller';

const router = express.Router();

router.post('/create-car', CarControllers.createCar);

router.get('/', CarControllers.getAllCars);

router.get('/:carId', CarControllers.getSingleCar);

export const CarRoutes = router;
