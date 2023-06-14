"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../src/functions");
describe('testing index file', () => {
    test('12+2=14', () => {
        expect((0, functions_1.sum)('12', '2')).toBe('14');
    });
});
