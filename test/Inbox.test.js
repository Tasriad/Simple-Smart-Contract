const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider({}))
const {interface,bytecode} = require('../compile');

// TEST WITH MOCHA
// class Car {
//     park() {
//         return 'stopped';
//     }
//     drive() {
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(() => {
//     car = new Car();
// })

// describe('Car class', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     })
//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     })
// })

let accounts;
let inbox;
const initialMessage = 'This is the initial message.';
const newMessage = 'This is the new message';
beforeEach(async ()=>{
    // get a list of all accounts
    //old syntax using promises
    // web3.eth.getAccounts().then(fetchedAccounts =>{
    //     console.log(fetchedAccounts);
    // })

    //new syntax
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode,arguments:[initialMessage]}).send({from: accounts[0],gas:'1000000'})
    // use one of those accounts to deploy the contract
})

describe('Inbox',()=>{
    it('deploys a contract',()=>{
        assert.ok(inbox.options.address);
    });
    it('has a default message', async ()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message,initialMessage);
    });
    it('can set a new message',async ()=>{
        await inbox.methods.setMessage(newMessage).send({from:accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message,newMessage);
    })
})