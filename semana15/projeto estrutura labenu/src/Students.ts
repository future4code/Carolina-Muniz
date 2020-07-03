import { User } from "./User";
import moment from "moment"

export class Students implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[],
    ) {}

    public getAge() {
        return moment().diff(this.birthDate, "years")
    }
   
}

export const student1 = new Students(
    '1',
    'Carolina',
    'carol@carol.com',
    moment('13/01/1984', 'DD/MM/YYYY'),
    ['Trabalhos manuais', 'Cozinhar doces']
    )

export const student2 = new Students(
    '2',
    'Luiz',
    'luiz@luiz.com',
    moment('12/08/1985', 'DD/MM/YYYY'),
    ['Ler', 'Assistir séries']
)

export const student3 = new Students(
    '3',
    'Camila',
    'camila@camila.com',
    moment('16/02/1980', 'DD/MM/YYYY'),
    ['Ler', 'Cuidar de gatos']
)

export const student4 = new Students(
    '3',
    'Mirela',
    'mirela@mirela.com',
    moment('03/05/1999', 'DD/MM/YYYY'),
    ['Dançar', 'Sair com os amigos']
)