"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const car_model_1 = require("../car/car.model");
const order_model_1 = require("./order.model");
const createOrderIntoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { car, quantity } = order;
    const carInStock = yield car_model_1.CarModel.findById(car);
    if (!carInStock) {
        throw new Error('Car not found.');
    }
    if (carInStock.quantity < quantity) {
        throw new Error(`Insufficient stock for this car. Available stock ${carInStock.quantity}`);
    }
    carInStock.quantity -= quantity;
    if (carInStock.quantity === 0) {
        carInStock.inStock = false;
    }
    yield carInStock.save();
    const result = yield order_model_1.OrderModel.create(order);
    return result;
});
const getRevenueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.aggregate([
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
});
exports.OrderServices = {
    createOrderIntoDB,
    getRevenueFromDB,
};
