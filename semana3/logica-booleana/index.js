/*Exercício de interpretação de código:

Exercicio 1
    true
    false
    true

    false

    false

    false

    false

    boolean
    

Exercício 2 
    a. É uma variável do JS onde podemos guardar mais de uma informação em uma só lugar.
    array=[valor1, velor2, valor3]

    b. Começa pelo 0.

    c. array.length

    d. Indique todas as mensagens impressas no console.
        I.  undefined
        II.  null
        III.  11
        IV.  3  e  4
        V.  19  e  9
        VI.  3
        VII.  1
*/

// Exercício de escrita de código
//1. a
let fahrenheit = 77
let kelvin = (fahrenheit- 32)*5/9 + 273.15
console.log(kelvin) //298.15

//1 b
let celsius = 80
let fahrenheit = (celsius)*9/5 + 32
console.log(fahrenheit) //176

//1. c
let celsius=30
let fahrenheit = (celsius)*9/5 + 32
let kelvin = (fahrenheit- 32)*5/9 + 273.15
console.log(fahrenheit) //86
console.log(kelvin) //303.15

//1. d
let celsius = prompt("Insira o valor de Celsius:")
let fahrenheit = (prompt("Insira o valor de Celsius:"))*9/5 + 32
let kelvin = (fahrenheit- 32)*5/9 + 273.15
console.log(fahrenheit) 
console.log(kelvin)

//Exercício 2
let nome = prompt("Insira seu nome:") //Carolina
let idade = prompt("Insira sua idade:") //36
let cidade = prompt("Insira a cidade em que você mora:") //São paulo
let profissão = prompt("Insira sua profissão:") //Administradora
let tempoDeProfissão = prompt("Insira há quanto tempo você trabalha nessa profissão:") //2012

let minhaMensagem = "Me chamo " + nome + ", " + " tenho " + idade + " e " + " moro em " + cidade + ". " + "Sou " + profissão + " desde " + tempoDeProfissão + "."
console.log(minhaMensagem) //Me chamo Carolina,  tenho 36 e  moro em São Paulo. Sou Administradora desde 2012.

//Exercício 3
let quillowattHora = 0.05
let quillowattGasto = 280
let valorTotal = quillowattGasto * quillowattHora
console.log(valorTotal) //14

let desconto = (valorTotal * 15) / 100
let valorAPagar = valorTotal - desconto
console.log(valorAPagar) // 11.9

//Desafio
//a
let libra = 20
let quilograma = libra * 0.453592
console.log(quilograma) //9.07184

//b
let onça = 10.5
let quilograma = onça * 0.0283495
console.log(quilograma) //0.29766975

//c
let milhas = 100
let metros = milhas * 1609.34
console.log(metros) //160934

//d
let pes = 50
let metro = pes * 0.3048
console.log(metro) //15.24

//e
let galao = 103.56
let litro = galao * 3.78541
console.log(litro) //392.01705960000004

//f
let xic = 450
let litro = xic * 0.284131
console.log(litro) //127.85895000000001

//g
let xic = prompt("Digite a quantidade na medida em xícara") //600
let litro = xic * 0.284131
console.log(litro)  //170.4786

let galao = prompt("Digite a quantidade na medida em galão") //5
let litro = galao * 3.78541
console.log(litro) //18.92705

let pes = prompt("Digite a quantidade de medida em pés") //10
let metro = pes * 0.3048
console.log(metro) //3.048










