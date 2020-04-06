/*Exercícios de interpretação de código**

EXERCÍCIO 1
 
Define uma variável sum e que ela vale 0.
Ela inicia a contagem em 0 até um número menor a 15, contando de 1 em 1
Esas contagem vai gerar a soma desses numeros menores a 15 (1+2+3+...+13+14)
E depois vai imprimir na tela o total dessa soma


EXERCÍCIO 2

a. Agrupa somente os números múltiplos de 5 ao array
b. (4) [10, 15, 25, 30]
c. (6) [12, 15, 18, 21, 27, 30]

DESAFIO
Resultado: 
0
00
000
0000
Imprime 4 linhas (que foi o numero informado pelo usuário), 
e em cada uma delas repete o número 0 correspondente ao número da linha.
*/


//Exercícios de escrita de código

//EXERCÍCIO 3
//a. 

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let maior = 0

for(let i = 0; i < array.length; i++) {
    const elemento = array[i]

    if(elemento > maior) {
        maior = elemento
    } 
}

let menor=maior
for (let i = 0; i < array.length; i++){
    const elemento = array[i]
    if(elemento< menor){
        menor = elemento
    }   
}

console.log("O maior número é " + maior + " e o menor número é " + menor + ".")


//b.

    const novoArray = []
    const divisor = 10
    for(const item of array){
        if(item!=undefined && item!="") {
            novoArray.push(item/divisor)
        }
    }
    console.log(novoArray)


// c. 
    const arrayPar = []
    const multiplo = 2
    for(const item of array){
      if(item%multiplo === 0) {
        arrayPar.push(item)
      }
    }
    console.log(arrayPar)


//d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

for(let i=0; i<array.length; i++) {
    console.log("O elemento do index " + i +" é: " + array[i])
}



