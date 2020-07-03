import { User } from "./User";


export class Teachers implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public specialties: TEACHER_SPECIALTY[],
    ) {}
}

export enum TEACHER_SPECIALTY{
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND"

}

export const teacher1 = new Teachers (
    '1',
    'João',
    'joao@joao.com',
    [TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.BACKEND]
)

export const teacher2 = new Teachers (
    '2',
    'Darvas',
    'darvas@darvas.com',
    [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.CSS]
)

export const teacher3 = new Teachers (
    '3',
    'Amanda',
    'amanda@amanda.com',
    [TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.OOP]
)