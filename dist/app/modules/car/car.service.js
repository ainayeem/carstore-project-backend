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
exports.CarServices = void 0;
const car_model_1 = require("./car.model");
const createCarIntoDB = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.create(car);
    return result;
});
const getAllCarsFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const query = searchTerm
        ? {
            $or: [
                { brand: { $regex: searchTerm, $options: 'i' } },
                { model: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ],
        }
        : {};
    const result = yield car_model_1.CarModel.find(query);
    return result;
});
const getSingleCarFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.findOne({ _id });
    return result;
});
const updateSingleCarInDB = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.findByIdAndUpdate(_id, payload, { new: true });
    return result;
});
const deleteSingleCarFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    yield car_model_1.CarModel.findByIdAndDelete(_id);
    return {};
});
exports.CarServices = {
    createCarIntoDB,
    getAllCarsFromDB,
    getSingleCarFromDB,
    updateSingleCarInDB,
    deleteSingleCarFromDB,
};
