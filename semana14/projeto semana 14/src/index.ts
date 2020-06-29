import * as fs from "fs"
import moment from "moment"

type ExtractItem = {
    description: string,
    value: number,
    date: number
}

type users = {
    name: string,
    birthDate: string,
    cpf: string,
    balance: number,
    extract: ExtractItem[]
}

const createAccount = (name: string, birthDate: string, cpf: string) => {
    // validar idade do usuário:
    const date = moment(birthDate, "DD/MM/YYYY") //transforma o birthDate que está em string em uma data 
    const today = moment() //cria uma data para o instante 
    const age = today.diff(date, "years") // pega a diferenca da data de nascimento com o today
    if (age < 18) {
        console.log("Usuário tem que ter mais de 18 anos")
        return
    }

    // 1. Ler o arquivo JSON
    //guardando o path absoluto em uma variável:
    const usersFilePath = "C:/Labenu (Future4)/Carolina-Muniz/semana14/projeto semana 14/users.json"
    //lendo o arquivo (vem em formato buffer):
    const usersFileData: Buffer = fs.readFileSync(usersFilePath)
    //transformando o arquivo de buffer para string:
    const usersString: string = usersFileData.toString()
    
    // 2. Parsear o arquivo
    const users: users[] = JSON.parse(usersString)
    // console.log(Array.isArray(users)) devolve um booleano dizendo se é ou não um array

    // 2.5 Validar CPF
    const foundUser = users.find((user: users)=>{
        return user.cpf === cpf
    })
    if(foundUser !== undefined){
        console.log("Já existe um usuário com esse CPF.")
        return
    }

    // 3. Adicionar o usuário no array
    users.push({
        name: name,
        birthDate: birthDate,
        cpf: cpf,
        balance: 0,
        extract: []
    })

    console.log(users)

    // 4. Reescrever o arquivo todo
    //antes precisa transformar os usuários no formato JSON:
    const usersStringifyed = JSON.stringify(users, null, 2) //recebe 3 parâmetos (o null quanse ñ se usa e o 2 é a identação)
    fs.writeFileSync(usersFilePath, usersStringifyed)
}

const name = process.argv[2]
const date = process.argv[3]
const cpf = process.argv[4]
createAccount(name, date, cpf)

 





