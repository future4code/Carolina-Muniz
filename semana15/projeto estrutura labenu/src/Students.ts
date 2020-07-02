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