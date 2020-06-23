const name: string = process.argv[2]
const age: number = Number(process.argv[3])
const newAge: number = age + 7


console.log(`Olá, ${name}! Você tem ${age} anos.`)
console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}.`)