"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
const createAccount = (name, birthDate, cpf) => {
    const date = moment_1.default(birthDate, "DD/MM/YYYY");
    const today = moment_1.default();
    const age = today.diff(date, "years");
    if (age < 18) {
        console.log("Usuário tem que ter mais de 18 anos");
        return;
    }
    const usersFilePath = "C:/Labenu (Future4)/Carolina-Muniz/semana14/projeto semana 14/users.json";
    const usersFileData = fs.readFileSync(usersFilePath);
    const usersString = usersFileData.toString();
    const users = JSON.parse(usersString);
    const foundUser = users.find((user) => {
        return user.cpf === cpf;
    });
    if (foundUser !== undefined) {
        console.log("Já existe um usuário com esse CPF.");
        return;
    }
    users.push({
        name: name,
        birthDate: birthDate,
        cpf: cpf,
        balance: 0,
        extract: []
    });
    console.log(users);
    const usersStringifyed = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, usersStringifyed);
};
const name = process.argv[2];
const date = process.argv[3];
const cpf = process.argv[4];
createAccount(name, date, cpf);
//# sourceMappingURL=index.js.map