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
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const handleResponse_1 = require("../handleResponse/handleResponse");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: orderData } = req.body;
        const result = yield order_service_1.OrderServices.createOrderIntoDB(orderData);
        (0, handleResponse_1.handleOrderResponse)(res, 200, true, 'Order created successfully', result);
    }
    catch (err) {
        (0, handleResponse_1.handleOrderResponse)(res, 500, false, 'Failed to create order', err);
    }
});
const getRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getRevenueFromDB();
        (0, handleResponse_1.handleOrderResponse)(res, 200, true, 'Revenue calculated successfully', result);
    }
    catch (err) {
        (0, handleResponse_1.handleOrderResponse)(res, 500, false, 'Failed to calculate revenue', err);
    }
});
exports.OrderControllers = {
    createOrder,
    getRevenue,
};
