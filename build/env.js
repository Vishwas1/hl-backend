"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const homedir = require("os").homedir();
exports.chaincode = process.env.CHAINCODE || "car";
exports.channel = process.env.CHANNEL || "ch1";
// Automatically extract credentials by the user id
// If no .env config is found, fallback to Hurley defaults
exports.identityId = process.env.IDENTITYID || "user1";
exports.identityName = process.env.IDENTITY || "admin";
exports.identityOrg = process.env.ORG || "org1";
exports.keyStore = process.env.KEYSTORE || `/${homedir}/hyperledger-fabric-network/.hfc-${exports.identityOrg}`;
exports.networkProfile = `/${homedir}/hyperledger-fabric-network/network-profiles/${exports.identityOrg}.network-profile.yaml`;
exports.port = process.env.PORT || 8000;
// Default to common values
exports.couchDBView = process.env.COUCHDBVIEW || "ch1_car";
exports.couchDBProtocol = process.env.COUCHDB_PROTOCOL || "http";
exports.couchDBHost = process.env.COUCHDB_HOST || "localhost";
exports.couchDBPort = process.env.COUCHDB_PORT || 5084;
//# sourceMappingURL=env.js.map