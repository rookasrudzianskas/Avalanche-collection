"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
require("@nomiclabs/hardhat-ethers");
dotenv_1.default.config();
exports.default = {
    solidity: {
        version: '0.8.16',
        settings: {
            viaIR: true,
            optimizer: {
                enabled: true,
                runs: 100,
            },
        },
    },
    networks: {
        fuji: {
            url: 'https://api.avax-test.network/ext/bc/C/rpc',
            gasPrice: 225000000000,
            chainId: 43113,
            accounts: [process.env.PRIVATE_KEY],
        },
        // subnet: {
        //   url: process.env.NODE_URL,
        //   chainId: Number(process.env.CHAIN_ID),
        //   gasPrice: 'auto',
        //   accounts: [process.env.PRIVATE_KEY],
        // },
    },
};
