import { TCar } from './car.interface';
import { CarModel } from './car.model';

const createCarIntoDB = async (car: TCar) => {
  const result = await CarModel.create(car);
  return result;
};

const getAllCarsFromDB = async (searchTerm?: string) => {
  const query = searchTerm
    ? {
        $or: [
          { brand: { $regex: searchTerm, $options: 'i' } },
          { model: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};
  const result = await CarModel.find(query);
  return result;
};

const getSingleCarFromDB = async (_id: string) => {
  const result = await CarModel.findOne({ _id });
  return result;
};

const updateSingleCarInDB = async (_id: string, payload: Partial<TCar>) => {
  const result = await CarModel.findByIdAndUpdate(_id, payload);
  return result;
};

const deleteSingleCarFromDB = async (_id: string) => {
  const result = await CarModel.findByIdAndDelete(_id);
  return result;
};

export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getSingleCarFromDB,
  updateSingleCarInDB,
  deleteSingleCarFromDB,
};
