import knex from "knex";
import { throws } from "assert";

// EXERCICIO 2
// c)
export class UserDatabase {
    private connection = knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
      },
    });
  
      private static TABLE_NAME = "User";
  
     async createUser(
      id: string,
      email: string,
      password: string
    ) {
        try {
            await this.connection
                .insert({
                    id,
                    email,
                    password, 
                })
                .into(UserDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    
    }
  }
  
  
  