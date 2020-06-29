"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio1_1 = require("./exercicio1");
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale("pt-br");
function meusCompromissos(compromissos) {
    compromissos.forEach((info) => {
        console.log(`
            Nome: ${info.nome}
            Horário de início: ${info.dataInicio.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário de fim: ${info.dataFinal.format("DD [de] MMMM [de] YYYY, HH:mm")}
            Descrição: ${info.descricao}
            Horário inicial em Londres, Inglaterra: ${info.dataInicio.utcOffset("+0100").format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário final em Londres, Inglaterra: ${info.dataFinal.utcOffset("+0100").format("dddd, DD [de] MMMM [de] YYYY, HH:mm")} 
        `);
    });
}
meusCompromissos(exercicio1_1.agenda);
//# sourceMappingURL=exercicio2.js.map