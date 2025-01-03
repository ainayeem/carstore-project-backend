import { Request, Response } from 'express';
import { CarServices } from './car.service';
import { handleCarResponse, handleOrderResponse as handleResponse } from '../handleResponse/handleResponse';

const createCar = async (req: Request, res: Response) => {
  try {
    // const { car: carData } = req.body;
    const result = await CarServices.createCarIntoDB(req.body);
    handleCarResponse(res, 200, true, 'Car created successfully', result);
  } catch (err) {
    handleCarResponse(res, 500, false, 'Failed to create car', err);
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await CarServices.getAllCarsFromDB(searchTerm as string);
    handleResponse(res, 200, true, 'Cars retrieved successfully', result);
  } catch (err) {
    handleResponse(res, 500, false, 'Failed to retrieve cars', err);
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await CarServices.getSingleCarFromDB(carId);
    handleResponse(res, 200, true, 'Car retrieved successfully', result);
  } catch (err) {
    handleResponse(res, 500, false, 'Failed to retrieve car', err);
  }
};

const updateSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const body = req.body;
    const result = await CarServices.updateSingleCarInDB(carId, body);
    handleResponse(res, 200, true, 'Car updated successfully', result);
  } catch (err) {
    handleResponse(res, 500, false, 'Failed to update car', err);
  }
};

const deleteSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    if (!carId) {
      throw new Error('Car ID is not given');
    }
    const result = await CarServices.deleteSingleCarFromDB(carId);
    handleResponse(res, 200, true, 'Car deleted successfully', result);
  } catch (err) {
    handleResponse(res, 500, false, 'Failed to delete car', err);
  }
};

export const CarControllers = {
  createCar,
  getAllCars,
  getSingleCar,
  updateSingleCar,
  deleteSingleCar,
};
