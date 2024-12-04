import { CarModel } from '../car/car.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: TOrder) => {
  const { car, quantity } = order;
  const isCarAvailable = await CarModel.findById(car);

  if (!isCarAvailable) {
    throw new Error('Car not found.');
  }

  if (isCarAvailable.quantity < quantity) {
    throw new Error(`Insufficient stock for this car. Available stock ${isCarAvailable.quantity}`);
  }
  isCarAvailable.quantity -= quantity;

  if (isCarAvailable.quantity === 0) {
    isCarAvailable.inStock = false;
  }
  await isCarAvailable.save();

  const result = await OrderModel.create(order);
  return result;
};

const getRevenueFromDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $lookup: {
        from: 'cars',
        localField: 'car',
        foreignField: '_id',
        as: 'carDetails',
      },
    },
    {
      $unwind: '$carDetails',
    },
    {
      $project: {
        totalPrice: 1,
        price: '$carDetails.price',
        quantity: 1,
      },
    },
    {
      $addFields: {
        revenue: { $multiply: ['$price', '$quantity'] },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$revenue' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  return {
    totalRevenue: result.length > 0 ? result[0].totalRevenue : 0,
  };
};

export const OrderServices = {
  createOrderIntoDB,
  getRevenueFromDB,
};
