# Simple-Smart-Contract
Inbox Smart Contract: A decentralized Ethereum DApp for storing and updating messages on the blockchain. Implements Solidity contract, Mocha tests, and Truffle deployment. Simplifies message management on the Ethereum network.

Project Description: Inbox Smart Contract

The Inbox Smart Contract project is a simple Ethereum-based decentralized application (DApp) that allows users to store and update messages on the blockchain. The project consists of a Solidity smart contract and accompanying JavaScript files for testing and deployment.

The smart contract, implemented in Solidity(0.4.17), defines a contract called "Inbox" which has a public message variable. The contract provides functions to initialize the initial message and update it with a new message. It utilizes the Ethereum blockchain's decentralized nature to ensure transparency and immutability of the messages stored.

The project includes a test file written in JavaScript using the Mocha testing framework. The tests ensure that the contract is successfully deployed, the initial message is set correctly, and the contract allows for updating the message with a new value.

Additionally, the project provides a compilation script that compiles the Solidity source code using the solc (Solidity compiler) package, and a deployment script that utilizes the Truffle HDWalletProvider to deploy the contract to an Ethereum network.

To use the project, dependencies such as Ganache (a local blockchain), Mocha (a JavaScript testing framework), and Web3 (a JavaScript library for interacting with Ethereum) need to be installed.

Overall, the Inbox Smart Contract project serves as a basic example of developing and deploying a smart contract on the Ethereum blockchain, demonstrating the core concepts of solidity, testing, and deployment.
