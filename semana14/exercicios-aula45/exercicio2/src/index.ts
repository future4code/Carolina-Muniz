function add(a: number, b: number): number {
    return a + b
}

function sub(a: number, b: number): number {
    return a - b
}

function mult(a: number, b: number): number {
    return a * b
}

function div(a: number, b: number): number {
    return a / b
}

const operacao: string = (process.argv[2])
const a: number = Number(process.argv[3])
const b: number = Number(process.argv[4])

const resultado = (operacao: string) => {
    switch(operacao){
        case "add":
            return(add(a,b))
            break
        case "sub":
            return(sub(a,b))
            break
        case "mult":
            return(mult(a,b))  
            break
        case "div":
            return(div(a,b))  
    }
} 

console.log(resultado(operacao))