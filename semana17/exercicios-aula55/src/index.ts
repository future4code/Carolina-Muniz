import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from "knex";
import { IdGenerator } from "./IdGenerator";

dotenv.config();

const app = express();

app.use(express.json());


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// EXERCICIO 1
// b)

const idGenerator: any = new IdGenerator();

const generatedId = idGenerator.generate();


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

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.connection
      .insert({
        id,
        email,
        password,
      })
		.into(UserDatabase.TABLE_NAME);
  }
}


