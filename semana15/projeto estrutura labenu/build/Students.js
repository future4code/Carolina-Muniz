"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.student4 = exports.student3 = exports.student2 = exports.student1 = exports.Students = void 0;
const moment_1 = __importDefault(require("moment"));
class Students {
    constructor(id, name, email, birthDate, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }
    getAge() {
        return moment_1.default().diff(this.birthDate, "years");
    }
}
exports.Students = Students;
exports.student1 = new Students('1', 'Carolina', 'carol@carol.com', moment_1.default('13/01/1984', 'DD/MM/YYYY'), ['Trabalhos manuais', 'Cozinhar doces']);
exports.student2 = new Students('2', 'Luiz', 'luiz@luiz.com', moment_1.default('12/08/1985', 'DD/MM/YYYY'), ['Ler', 'Assistir séries']);
exports.student3 = new Students('3', 'Camila', 'camila@camila.com', moment_1.default('16/02/1980', 'DD/MM/YYYY'), ['Ler', 'Cuidar de gatos']);
exports.student4 = new Students('3', 'Mirela', 'mirela@mirela.com', moment_1.default('03/05/1999', 'DD/MM/YYYY'), ['Dançar', 'Sair com os amigos']);
//# sourceMappingURL=Students.js.map