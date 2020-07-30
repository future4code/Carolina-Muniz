import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    private static TABLE_NAME = "LAMA_Users"

    public async signup(
        id: string,
        name: string,
        email: string,
        password: string
        ) {
        try {
            await super.getConnection()
            .insert({
                id,
                name,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}