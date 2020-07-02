import { Teachers } from "./Teachers";
import { Students } from "./Students";
import moment from "moment"

export abstract class Missions {
    private name: string = ""; // inicia como uma string vazia

    constructor(
        private id: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teachers[],
        private students: Students[],
        private currentModule?: number | undefined
    ) {}

    public setName(name: string) {
        this.name = name
    }

    public addTeacher(teacher: Teachers) {
        this.teachers.push(teacher)
    }

    public addStudent(student: Students) {
        this.students.push(student)
    }
}