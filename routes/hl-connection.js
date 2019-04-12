const { keyStore, identityName, channel, chaincode, networkProfile, identityId } = require('../env');
const { FabricControllerAdapter } = require('@worldsibu/convector-adapter-fabric');
const { ClientFactory } = require('@worldsibu/convector-core');
const { CarController, Car } = require('car-cc');
const { join, resolve } = require('path');

const adapter = new FabricControllerAdapter({
  txTimeout: 300000,
  user: identityName,
  channel,
  chaincode,
  keyStore: resolve(__dirname, keyStore),
  networkProfile: resolve(__dirname, networkProfile)
  // userMspPath: keyStore
});

const initAdapter = adapter.init();
const CarControllerBackEnd = ClientFactory(CarController, adapter);

const InitServer = async () => {
  await initAdapter;
}

module.exports = {
  InitServer,
  CarControllerBackEnd
}


