//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece?

const minhaString: string = 'Carolina'

minhaString = 13 //não permite associar números pq está tipada como string.

//b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
//Como podemos fazer com que essa variável aceite letras?

const meuNumero: number|string = 2020

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
//`nome`, que é uma string;
//`idade`, que é um número;
//`corFavorita`, que é uma string.
//Como você faria para garantir que o objeto só tenha as propriedades necessárias? 
//Faça a tipagem do objeto para que ele só aceite os valores acima.
type person = {
    nome: string,
    idade: number,
    corFavorita: string
}

const filha: person = {
    nome: 'Catarina',
    idade: 5,
    corFavorita: 'rosa'
}

//d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
//Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const euMesma: pessoa = {
    nome: 'Carolina',
    idade: 36,
    corFavorita: 'azul petróleo'
}

const marido: pessoa = {
    nome: 'Luiz',
    idade: 35,
    corFavorita: 'azul'
}

const pai: pessoa = {
    nome: 'Walter',
    idade: 89,
    corFavorita: 'verde'
}

//e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. 
//Use um `enum` para isso.
