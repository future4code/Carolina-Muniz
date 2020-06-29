"use strict";
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
const operacao = (process.argv[2]);
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);
const resultado = (operacao) => {
    switch (operacao) {
        case "add":
            return (add(a, b));
            break;
        case "sub":
            return (sub(a, b));
            break;
        case "mult":
            return (mult(a, b));
            break;
        case "div":
            return (div(a, b));
    }
};
console.log(resultado(operacao));
//# sourceMappingURL=index.js.map