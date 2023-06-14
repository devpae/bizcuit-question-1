"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const functions_1 = require("./functions");
const argv = yargs_1.default
    .command('sum <a> <b>', 'Adds two numbers', (yargs) => {
    return yargs
        .positional('a', {
        describe: 'First number',
        type: 'string',
    })
        .positional('b', {
        describe: 'Second number',
        type: 'string',
    });
}, (argv) => {
    var _a, _b;
    const result = (0, functions_1.sum)((_a = argv.a) !== null && _a !== void 0 ? _a : '', (_b = argv.b) !== null && _b !== void 0 ? _b : '');
    console.log('Result:', result, typeof result);
})
    .demandCommand(1, 'Please specify a command.')
    .help()
    .argv;
