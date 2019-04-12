"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var yup = __importStar(require("yup"));
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.car';
        return _this;
    }
    __decorate([
        convector_core_model_1.ReadOnly(), convector_core_model_1.Required()
    ], Car.prototype, "type", void 0);
    __decorate([
        convector_core_model_1.ReadOnly(), convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Car.prototype, "make", void 0);
    __decorate([
        convector_core_model_1.ReadOnly(), convector_core_model_1.Required(), convector_core_model_1.Validate(yup.string())
    ], Car.prototype, "model", void 0);
    __decorate([
        convector_core_model_1.Required(), convector_core_model_1.Validate(yup.string())
    ], Car.prototype, "colour", void 0);
    __decorate([
        convector_core_model_1.Required(), convector_core_model_1.Validate(yup.string())
    ], Car.prototype, "owner", void 0);
    return Car;
}(convector_core_model_1.ConvectorModel));
exports.Car = Car;
