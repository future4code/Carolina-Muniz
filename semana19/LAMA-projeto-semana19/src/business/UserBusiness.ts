import { IdGenerator } from "../service/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { LoginInputDTO, User } from "../model/User";
import HashManager from "../service/HashManager";

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

    public async getByEmail(input: LoginInputDTO){

        const userDatabase = new UserDatabase();
        const user: User = await userDatabase.getByEmail(input.email);

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(input.password, user.getPassword())

        if(!hashCompare){
            throw new Error("Invalid password");
        }

        return user;
        
    }
}