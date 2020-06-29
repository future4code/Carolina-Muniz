"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agenda = void 0;
const moment_1 = __importDefault(require("moment"));
exports.agenda = [
    {
        nome: 'Dentista',
        descricao: 'Consulta com dentista.',
        dataInicio: moment_1.default('27/06/2020 09:00', 'DD/MM/YYYY HH:mm'),
        dataFinal: moment_1.default('27/06/2020 10:00', 'DD/MM/YYYY HH:mm')
    },
    {
        nome: 'Supermercado',
        descricao: 'Compras para a quinzena.',
        dataInicio: moment_1.default('28/06/2020 20:00', 'DD/MM/YYYY HH:mm'),
        dataFinal: moment_1.default('28/06/2020 21:00', 'DD/MM/YYYY HH:mm')
    },
    {
        nome: 'Viagem',
        descricao: 'Quarentena em Fortaleza.',
        dataInicio: moment_1.default('04/07/2020 08:00', 'DD/MM/YYYY HH:mm'),
        dataFinal: moment_1.default('04/08/2020 15:00', 'DD/MM/YYYY HH:mm')
    }
];
//# sourceMappingURL=exercicio1.js.map