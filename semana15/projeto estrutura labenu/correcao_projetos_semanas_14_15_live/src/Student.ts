import {User} from "./User";
import moment from "moment";

export class Student implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private birthDate: moment.Moment,
    private hobbies: string[]
  ) {}

  public getAge() {
    return moment().diff(this.birthDate, "years");
  }

}

export const student1 = new Student('1', 'Joãozinho', 'joaozinho@gmail.com', moment('18/09/1995', 'DD/MM/YYYY'), ['Ler', 'Assistir Filmes']);
export const student2 = new Student("2", "Zezinho", "zezinho@gmail.com", moment("10/10/1990", "DD/MM/YYYY"), ['Pedalar', 'Explorar a natureza']);
export const student3 = new Student("3", "Luizinho", "luizinho@gmail.com", moment('18/09/1989', 'DD/MM/YYY'), ['cozinhar']);
export const student4 = new Student('4', 'Pedrinho', "pedrinho@gmail.com", moment('05/03/1992', "DD/MM/YYYY"), ['Dançar', 'Sair com amigos']);