import { Request, Response } from 'express';
import { CarServices } from './car.service';

const createCar = async (req: Request, res: Response) => {
  try {
    const { car: carData } = req.body;
    const result = await CarServices.createCarIntoDB(carData);
    res.status(200).json({
      message: 'Car created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarsFromDB();
    res.status(200).json({
      message: 'Cars retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await CarServices.getSingleCarFromDB(carId);
    res.status(200).json({
      message: 'Car retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const CarControllers = {
  createCar,
  getAllCars,
  getSingleCar,
};
