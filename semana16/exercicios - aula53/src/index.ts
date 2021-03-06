import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express"
import { AddressInfo } from "net";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express()

app.use(express.json());

// EXERCICIO 1
//a) Retorna 2 arrays, 1 com a informação solicitada e outro com dados de configuração
//b)
const searchActorFromName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM actor 
    WHERE name = "${name}"
  `)
  console.log(result[0])
  return result[0]
}

searchActorFromName("Camila Pitanga")

//c)
const countActorFromGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(gender) 
        FROM actor
        WHERE gender="${gender}"
`)
console.log(result[0])
const count = result[0][0].count
  return count;
}
countActorFromGender("female")

//EXERCÍCIO 2
//a)

async function updateSalaryActor(id: string, salary: number): Promise<any>{
    try {
        const result = await connection("actor")
            .update({
            salary: salary
            })
        .where("id", id)
        console.log("Salário atualizado com sucesso.")
    } catch (error) {
        console.log(error)
    }
}

updateSalaryActor("001", 350000)

//b)
async function deleteActor(id: string): Promise<any>{
    try {
        const result = await connection.raw(`
            DELETE FROM actor
            WHERE id="${id}"
        `)
        console.log("Ator deletado com sucesso.")
    } catch (error) {
        console.log(error)
    }
}

deleteActor("003")

// c)
async function avgSalaryActor(gender: string): Promise<any>{
    try {
        const result = await connection.raw(`
            SELECT AVG(salary) 
            FROM actor 
            WHERE gender="${gender}";
        `)
        console.log(result[0])
    } catch (error) {
        console.log(error)
    }
}

avgSalaryActor("male")

//  EXERCÍCIO 3
// a) Guarda em uma constante os parâmetros passados nas requisições
// b) Permite definir a resposta devolvida, tanto no sucesso quanto no erro.
// c)
app.get('/actor', async function(req: Request, res: Response){
    try {
        const count = await countActorFromGender(req.query.gender as string)
        res.status(200).send({
            quantity: count
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({message: error.message})
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

