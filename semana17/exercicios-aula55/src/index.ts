import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from "knex";
import { IdGenerator } from "./IdGenerator";
import { Authenticator } from "./service/Authenticator";

dotenv.config();

const app = express();

app.use(express.json());

app.post('/signup', async (req: Request, res: Response)=>{
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length >= 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDatabase = new UserDatabase();
    await userDatabase.createUser(id, userData.email, userData.password);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({id});

    res.status(200).send({token});
  } catch (error) {
    res.status(400).send({error})
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


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


