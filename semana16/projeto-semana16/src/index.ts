import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

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

/**************************************************************/

async function createUser(
  name: string,
  nickname: string,
  email: string
  ): Promise <void> {
  if(name === "" || nickname === "" || email === ""){
    return console.log("Todos os campos deverão ser preenchidos.")
  } else {
    await connection
      .insert({
        id: Date.now(),
        name: name,
        nickname: nickname,
        email: email
      })
      .into('User')
  }
}

app.put('/user', async(req: Request, res: Response) => {
  try {
    await createUser(
      req.body.name,
      req.body.nickname,
      req.body.email
    )
      res.status(200).send({
          message: "Usuário cadastrado com sucesso."    
      });
  } catch (error) {
      res.status(400).send({
          message: error.message
      });
  };
});

async function getUserById (id: string): Promise <any> {
  try {
    const result = await connection 
      .select("id", "nickname")
      .from ("User")
      .where("id", "LIKE", `${id}`)
      return result
  } catch (error) {
      console.log(error)
  }
}

app.get('/user/:id', async function(req: Request, res: Response) {
  try {
    const getUser = await getUserById (
      req.params.id,
    )
    res.status(200).send({getUser})
  } catch (error) {
      console.log("Usuário não encontrado.")
      res.status(400).send({message: error.message})
  }
})
    