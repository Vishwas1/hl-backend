const dotenv = require('dotenv');
dotenv.config();

const homedir = require('os').homedir();

const chaincode = process.env.CHAINCODE || 'car';
const channel = process.env.CHANNEL || 'ch1';

// Automatically extract credentials by the user id
// If no .env config is found, fallback to Hurley defaults
const identityId = process.env.IDENTITYID || 'user1';
const identityName = process.env.IDENTITY || 'admin';
const identityOrg = process.env.ORG || 'org1';

const keyStore = process.env.KEYSTORE || `/${homedir}/hyperledger-fabric-network/.hfc-${identityOrg}`;
const networkProfile = process.env.NETWORKPROFILE || `/${homedir}/hyperledger-fabric-network/network-profiles/${identityOrg}.network-profile.yaml`;
const port = process.env.PORT || 8000;

// Default to common values
const couchDBView = process.env.COUCHDBVIEW || 'ch1_person';
const couchDBProtocol = process.env.COUCHDB_PROTOCOL || 'http';
const couchDBHost = process.env.COUCHDB_HOST || 'localhost';
const couchDBPort = process.env.COUCHDB_PORT || 5084;

module.exports = {
  chaincode,
  channel,
  identityId,
  identityName,
  keyStore,
  networkProfile,
  port,
  couchDBView,
  couchDBProtocol,
  couchDBHost,
  couchDBPort,
}
