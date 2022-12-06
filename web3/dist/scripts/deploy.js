"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const console_1 = __importDefault(require("console"));
const _metadataUri = 'https://gateway.pinata.cloud/ipfs/https://gateway.pinata.cloud/ipfs/QmX2ubhtBPtYw75Wrpv6HLb1fhbJqxrnbhDo1RViW3oVoi';
async function deploy(name, ...params) {
    const contractFactory = await hardhat_1.ethers.getContractFactory(name);
    return await contractFactory.deploy(...params).then((f) => f.deployed());
}
async function main() {
    const [admin] = await hardhat_1.ethers.getSigners();
    console_1.default.log(`Deploying a smart contract...`);
    const AVAXGods = (await deploy('AVAXGods', _metadataUri)).connect(admin);
    console_1.default.log({ AVAXGods: AVAXGods.address });
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console_1.default.error(error);
    process.exit(1);
});
