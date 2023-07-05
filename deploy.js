const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

const mnemonic = 'worth device opinion current flower satisfy donkey excite length silver gain fade';
const infuraUrl = 'https://sepolia.infura.io/v3/db0c641cfc474ce393d627a55e392ef1';

const provider = new HDWalletProvider(mnemonic, infuraUrl);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['initial message'] })
        .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract deployed to:', result.options.address);

    provider.engine.stop();
};

deploy();
