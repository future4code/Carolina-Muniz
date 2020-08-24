"use strict";
//  EXERCÍCIO 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringCompression = exports.isOneEdit = void 0;
exports.isOneEdit = (main, comparation) => {
    if (comparation.length > main.length + 1 ||
        comparation.length < main.length - 1) {
        return false;
    }
    let equalAmount = 0;
    for (const char of comparation) {
        if (main.indexOf(char) !== -1) {
            equalAmount += 1;
        }
    }
    return (equalAmount <= main.length + 1 &&
        equalAmount >= main.length - 1);
};
//  EXERCÍCIO 2
exports.stringCompression = (input) => {
    const subsString = [];
    let lastChar = input[0];
    let charCount = 0;
    for (const char of input) {
        if (char !== lastChar) {
            subsString.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }
    subsString.push(lastChar + charCount);
    let result = "";
    for (const key of subsString) {
        result += key;
    }
    return result.length > input.length ? input : result;
};
