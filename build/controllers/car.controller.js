"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_cc_1 = require("car-cc");
const express_1 = require("express");
const convector_1 = require("../convector");
const router = express_1.Router();
convector_1.InitServerIdentity();
router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        res.send(yield convector_1.CarControllerBackEnd.query(id));
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
router.post("/create", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const newCar = new car_cc_1.Car({
            id: '231', make: 'Vab', model: 'Model1', colour: 'blue', owner: 'Vishwas'
        });
        yield convector_1.CarControllerBackEnd.create(newCar);
        res.status(200).send('SUCCESS');
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.CarControllerRouter = router;
//# sourceMappingURL=car.controller.js.map