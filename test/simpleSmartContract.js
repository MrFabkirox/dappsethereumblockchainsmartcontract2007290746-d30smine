// const SimpleSmartContract = artifacts.require('SimpleStorageContract');
const SimpleSmartContract = artifacts.require('./SimpleSmartContract');

// contract('SimpleStorageContract', () => {
contract('SimpleSmartContract', () => {
  it('Should deploy smart contract properly.', async () => {
    const SimpleSmartContract = await SimpleSmartContract.deployed();
    console.log(simpleSmartContract.address);
    assert(simpleSmartContract.address !== '')
  });
});
