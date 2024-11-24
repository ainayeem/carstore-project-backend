import { Response } from 'express';

export const handleCarResponse = <T>(res: Response, statusCode: number, success: boolean, message: string, data: T | null): void => {
  const responseData = data instanceof Error ? { error: data.message, stack: data.stack } : data;

  res.status(statusCode).json({
    message,
    success,
    data: responseData,
  });
};
export const handleOrderResponse = <T>(res: Response, statusCode: number, status: boolean, message: string, data: T | null): void => {
  const responseData = data instanceof Error ? { error: data.message, stack: data.stack } : data;
  res.status(statusCode).json({
    message,
    status,
    data: responseData,
  });
};
