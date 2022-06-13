import Web3 from 'web3';

//Connect to API that allows acces to Etherum Blockchain (node)
const url = "https://mainnet.infura.io/v3/e82f243b25ed4793bc29076a3aa82eb8";

const Web3 = new Web3(url);

//ABI
const ABI = [
    {
        "type":"constructor",
        "stateMutability":"payable",
        "inputs":[{"type":"address","name":"_logic","internalType":"address"},{"type":"address","name":"admin_","internalType":"address"},{"type":"bytes","name":"_data","internalType":"bytes"}]
    },
    {
        "type":"event",
        "name":"AdminChanged",
        "inputs":[{"type":"address","name":"previousAdmin","internalType":"address","indexed":false},{"type":"address","name":"newAdmin","internalType":"address","indexed":false}],"anonymous":false
    },
    {
        "type":"event",
        "name":"BeaconUpgraded",
        "inputs":[{"type":"address","name":"beacon","internalType":"address","indexed":true}],
        "anonymous":false
    },
    {
        "type":"event",
        "name":"Upgraded",
        "inputs":[{"type":"address","name":"implementation","internalType":"address","indexed":true}],
        "anonymous":false
    },
    {
        "type":"fallback",
        "stateMutability":"payable"
    },
    {
        "type":"function",
        "stateMutability":"nonpayable",
        "outputs":[{"type":"address","name":"admin_","internalType":"address"}],
        "name":"admin",
        "inputs":[]
    },
    {
        "type":"function",
        "stateMutability":"nonpayable",
        "outputs":[],
        "name":"changeAdmin",
        "inputs":[{"type":"address","name":"newAdmin","internalType":"address"}]
    },
    {
        "type":"function",
        "stateMutability":"nonpayable",
        "outputs":[{"type":"address","name":"implementation_","internalType":"address"}],
        "name":"implementation",
        "inputs":[]
    },
    {
        "type":"function",
        "stateMutability":"nonpayable",
        "outputs":[],
        "name":"upgradeTo",
        "inputs":[{"type":"address","name":"newImplementation","internalType":"address"}]
    },
    {
        "type":"function",
        "stateMutability":"payable",
        "outputs":[],
        "name":"upgradeToAndCall",
        "inputs":[{"type":"address","name":"newImplementation","internalType":"address"},{"type":"bytes","name":"data","internalType":"bytes"}]
    },
    {
        "type":"receive",
        "stateMutability":"payable"
    }];

//Contract Address
const contractAddress = "0x3dCcf641f4645D55C98123181b1191E3310846BF";

//Get contract instance
const cloudWalkContract = new web3.eth.Contract(ABI, contractAddress); //ABI e Address

console.log(cloudWalkContract)


