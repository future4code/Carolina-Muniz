// **Exercícios de interpretação de código**
//Exercício 1
// a. retorna [ ]
// b. retorna [0, 1, 0, 1, 2, 3]
// c. retorna [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

//Exercício 2
// a. imprime 0 (posição em que o Darvas está no array)
//    imprime 2 (posição em que o João está no array)
//    imprime undefined (pois não há Paula no a)
// b. 

//Exercício 3
// A função acrescenta ao array a variavel resultadoA e retira a variável resultadoB;
// Resultado pode ser substituído por valorA, e resultadoB pode ser substituído por valorB



// **Exercícios de escrita de código
//Exercício  4 - a

let idadeCachorro = (a, b) => {
    return a*b;
}
    const resultado=idadeCachorro(4, 7)
    console.log(resultado)

//Exercício  4 - b

var nome = prompt('Qual é o seu nome?')
var idade= prompt('Quantos anos você tem?')
var endereço= prompt('Qual o endereço que você mora?')
var estudante= prompt('é estudante? [s, n]')

let mensagemFinal = function(mensagem){
    if (estudante === "s"){
        return mensagem(nome + " , " + idade + " , " + endereço + " e sou estudante.")
    } else 
        mensagem(nome + " , " + idade + " , " + endereço + " e não sou estudante.")
}
console.log(mensagemFinal)

