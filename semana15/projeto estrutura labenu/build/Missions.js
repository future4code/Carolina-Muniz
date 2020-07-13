"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Missions = void 0;
class Missions {
    constructor(id, startDate, endDate, teachers, students, currentModule) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.currentModule = currentModule;
        this.name = "";
    }
    setName(name) {
        this.name = name;
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    addStudent(student) {
        this.students.push(student);
    }
}
exports.Missions = Missions;
//# sourceMappingURL=Missions.js.map