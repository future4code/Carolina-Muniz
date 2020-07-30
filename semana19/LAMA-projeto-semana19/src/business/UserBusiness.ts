import { IdGenerator } from "../service/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness{
    public async signup(
        name: string,
        email: string,
        password: string
    ): Promise <string> {
        const idGenerator = new IdGenerator();

        const id = idGenerator.generate();

        const userDatabase = new UserDatabase();
        await userDatabase.signup(id, name, email, password);
        
        return id;
    }
}