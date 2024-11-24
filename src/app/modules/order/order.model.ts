import { Schema, model, Types } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email format'],
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      required: [true, 'Car ID is required'],
      validate: {
        validator: (value: Types.ObjectId) => {
          return Types.ObjectId.isValid(value);
        },
        message: 'Invalid Car ID format',
      },
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be greater than or equal to 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be greater than or equal to 0'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const OrderModel = model<TOrder>('Order', orderSchema);
