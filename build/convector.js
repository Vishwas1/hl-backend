"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const convector_adapter_fabric_1 = require("@worldsibu/convector-adapter-fabric");
const convector_core_1 = require("@worldsibu/convector-core");
const fs = __importStar(require("fs"));
const path_1 = require("path");
const env_1 = require("./env");
const car_cc_1 = require("car-cc");
const adapter = new convector_adapter_fabric_1.FabricControllerAdapter({
    txTimeout: 300000,
    user: env_1.identityName,
    channel: env_1.channel,
    chaincode: env_1.chaincode,
    keyStore: path_1.resolve(__dirname, env_1.keyStore),
    networkProfile: path_1.resolve(__dirname, env_1.networkProfile)
    // userMspPath: keyStore
});
exports.initAdapter = adapter.init();
exports.CarControllerBackEnd = convector_core_1.ClientFactory(car_cc_1.CarController, adapter);
//#region Optional
/**
 * Check if the identity has been initialized in the chaincode.
 */
function InitServerIdentity() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.initAdapter;
        const res = yield exports.CarControllerBackEnd.query("2");
        try {
            const serverIdentity = new car_cc_1.Car(res).toJSON();
            if (!serverIdentity || !serverIdentity.id) {
                throw new Error("Server identity does not exists, make sure to enroll it or seed data");
            }
            else {
                console.log("Server identity exists");
            }
        }
        catch (ex) {
            console.log(JSON.stringify(ex));
            throw new Error("Server identity does not exists, make sure to enroll it or seed data");
        }
    });
}
exports.InitServerIdentity = InitServerIdentity;
const contextPath = path_1.join(env_1.keyStore + "/" + env_1.identityName);
fs.readFile(contextPath, "utf8", function (err, data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (err) {
            throw new Error(`Context in ${contextPath} doesn't exist. Make sure that path resolves to your key stores folder`);
        }
        else {
            console.log("Context path with cryptographic materials exists");
        }
    });
});
//#endregion
//# sourceMappingURL=convector.js.map