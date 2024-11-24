"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleOrderResponse = exports.handleCarResponse = void 0;
const handleCarResponse = (res, statusCode, success, message, data) => {
    res.status(statusCode).json({
        message,
        success,
        data,
    });
};
exports.handleCarResponse = handleCarResponse;
const handleOrderResponse = (res, statusCode, status, message, data) => {
    res.status(statusCode).json({
        message,
        status,
        data,
    });
};
exports.handleOrderResponse = handleOrderResponse;
