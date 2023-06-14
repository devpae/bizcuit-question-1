"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
function sum(a, b) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        console.log("Invalid input");
        return "";
    }
    return (numA + numB).toString();
}
exports.sum = sum;
