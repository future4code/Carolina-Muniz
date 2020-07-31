import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { USER_ROLES } from "../service/Authenticator";

export class UserDatabase extends BaseDatabase{

    private static TABLE_NAME = "LAMA_Users"

    public async signup(
        id: string,
        name: string,
        email: string,
        password: string,
        role: USER_ROLES
        ) {
        try {
            await super.getConnection()
            .insert({
                id,
                name,
                email,
                password,
                role
            })
            .into(UserDatabase.TABLE_NAME);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getByEmail(email: string): Promise<User>{
        try {
            const result = await this.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({email: email});

            return User.toUserModel(result[0]);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}