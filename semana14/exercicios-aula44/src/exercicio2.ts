//Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
function numbers(a: number, b: number):void {
    console.log(a, b)
}
numbers(15,5)

// a) A soma desses números
function soma(a: number, b: number):number {
    return  a+b
}

console.log(soma(10, 5))

// b) A subtração desses números
function subtracao(a: number, b: number):number {
    return  a-b
}

console.log(subtracao(10, 5))

// c) A multiplicação desses números
function multiplicacao(a: number, b: number):number {
    return  a*b
}

console.log(multiplicacao(10, 5))

// d) Qual deles é o maior
function retornaMaior(a: number, b: number):number {
    if(a>b){
        return a
    } else {
        return b
    }
}

console.log(retornaMaior(10, 5))