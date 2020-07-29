const Migrations = artifacts.require("./SimpleSmartContract.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
