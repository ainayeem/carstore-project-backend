import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { handleOrderResponse } from '../handleResponse/handleResponse';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);
    handleOrderResponse(res, 200, true, 'Order created successfully', result);
  } catch (err) {
    handleOrderResponse(res, 500, false, 'Failed to create order', err);
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getRevenueFromDB();
    handleOrderResponse(res, 200, true, 'Revenue calculated successfully', result);
  } catch (err) {
    handleOrderResponse(res, 500, false, 'Failed to calculate revenue', err);
  }
};

export const OrderControllers = {
  createOrder,
  getRevenue,
};
