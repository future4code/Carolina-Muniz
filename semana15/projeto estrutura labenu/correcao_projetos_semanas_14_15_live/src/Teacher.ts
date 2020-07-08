import {User} from "./User";
import moment from "moment";

export class Teacher implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private specialties: TEACHER_SPECIALTY[]
  ) {}
}

export enum TEACHER_SPECIALTY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND"
}

export const teacher1 = new Teacher('1', 'Goli', 'goli@gmail.com', [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.OOP]);
export const teacher2 = new Teacher('2', 'Soter', 'soter@gmail.com', [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.CSS]);
export const teacher3 = new Teacher('3', 'Paulinha', 'paulinha@gmail.com', [TEACHER_SPECIALTY.TESTES]);