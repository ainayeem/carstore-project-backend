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
exports.CarControllers = void 0;
const car_service_1 = require("./car.service");
const handleResponse_1 = require("../handleResponse/handleResponse");
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { car: carData } = req.body;
        const result = yield car_service_1.CarServices.createCarIntoDB(carData);
        (0, handleResponse_1.handleCarResponse)(res, 200, true, 'Car created successfully', result);
    }
    catch (err) {
        (0, handleResponse_1.handleCarResponse)(res, 500, false, 'Failed to create car', err);
    }
});
const getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield car_service_1.CarServices.getAllCarsFromDB(searchTerm);
        (0, handleResponse_1.handleCarResponse)(res, 200, true, 'Cars retrieved successfully', result);
    }
    catch (err) {
        (0, handleResponse_1.handleCarResponse)(res, 500, false, 'Failed to retrieve cars', err);
    }
});
const getSingleCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield car_service_1.CarServices.getSingleCarFromDB(carId);
        (0, handleResponse_1.handleCarResponse)(res, 200, true, 'Car retrieved successfully', result);
    }
    catch (err) {
        (0, handleResponse_1.handleCarResponse)(res, 500, false, 'Failed to retrieve car', err);
    }
});
const updateSingleCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const body = req.body;
        const result = yield car_service_1.CarServices.updateSingleCarInDB(carId, body);
        (0, handleResponse_1.handleCarResponse)(res, 200, true, 'Car updated successfully', result);
    }
    catch (err) {
        (0, handleResponse_1.handleCarResponse)(res, 500, false, 'Failed to update car', err);
    }
});
const deleteSingleCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield car_service_1.CarServices.deleteSingleCarFromDB(carId);
        (0, handleResponse_1.handleCarResponse)(res, 200, true, 'Car deleted successfully', result);
    }
    catch (err) {
        (0, handleResponse_1.handleCarResponse)(res, 500, false, 'Failed to delete car', err);
    }
});
exports.CarControllers = {
    createCar,
    getAllCars,
    getSingleCar,
    updateSingleCar,
    deleteSingleCar,
};
