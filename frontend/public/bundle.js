var contractABI = [];
var contractAddress = '0x6a263d4E323D19312932CA03fd47C36572B52242'
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.etc.getAccounts()
.then(console.log);


