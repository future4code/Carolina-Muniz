"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher3 = exports.teacher2 = exports.teacher1 = exports.TEACHER_SPECIALTY = exports.Teachers = void 0;
class Teachers {
    constructor(id, name, email, specialties) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.specialties = specialties;
    }
}
exports.Teachers = Teachers;
var TEACHER_SPECIALTY;
(function (TEACHER_SPECIALTY) {
    TEACHER_SPECIALTY["REACT"] = "REACT";
    TEACHER_SPECIALTY["REDUX"] = "REDUX";
    TEACHER_SPECIALTY["CSS"] = "CSS";
    TEACHER_SPECIALTY["TESTES"] = "TESTES";
    TEACHER_SPECIALTY["TYPESCRIPT"] = "TYPESCRIPT";
    TEACHER_SPECIALTY["OOP"] = "OOP";
    TEACHER_SPECIALTY["BACKEND"] = "BACKEND";
})(TEACHER_SPECIALTY = exports.TEACHER_SPECIALTY || (exports.TEACHER_SPECIALTY = {}));
exports.teacher1 = new Teachers('1', 'João', 'joao@joao.com', [TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.BACKEND]);
exports.teacher2 = new Teachers('2', 'Darvas', 'darvas@darvas.com', [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.CSS]);
exports.teacher3 = new Teachers('3', 'Amanda', 'amanda@amanda.com', [TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.OOP]);
//# sourceMappingURL=Teachers.js.map