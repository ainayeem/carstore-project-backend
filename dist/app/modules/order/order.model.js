"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email format'],
    },
    car: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Car',
        required: [true, 'Car ID is required'],
        validate: {
            validator: (value) => {
                return mongoose_1.Types.ObjectId.isValid(value);
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
}, {
    timestamps: true,
    versionKey: false,
});
exports.OrderModel = (0, mongoose_1.model)('Order', orderSchema);
