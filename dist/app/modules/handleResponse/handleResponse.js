"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleOrderResponse = exports.handleCarResponse = void 0;
const handleCarResponse = (res, statusCode, success, message, data) => {
    const responseData = data instanceof Error ? { error: data.message, stack: data.stack } : data;
    res.status(statusCode).json({
        message,
        success,
        data: responseData,
    });
};
exports.handleCarResponse = handleCarResponse;
const handleOrderResponse = (res, statusCode, status, message, data) => {
    const responseData = data instanceof Error ? { error: data.message, stack: data.stack } : data;
    res.status(statusCode).json({
        message,
        status,
        data: responseData,
    });
};
exports.handleOrderResponse = handleOrderResponse;
