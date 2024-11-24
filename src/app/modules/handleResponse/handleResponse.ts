import { Response } from 'express';

export const handleCarResponse = <T>(res: Response, statusCode: number, success: boolean, message: string, data: T | null): void => {
  res.status(statusCode).json({
    message,
    success,
    data,
  });
};
export const handleOrderResponse = <T>(res: Response, statusCode: number, status: boolean, message: string, data: T | null): void => {
  res.status(statusCode).json({
    message,
    status,
    data,
  });
};
