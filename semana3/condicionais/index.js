/* Exercício de interpretação de código

1.
Abre na tela uma janela "Digite o número que você quer testar?" através do prompt, onde o usuário insere um número; 
O valor digitado é convertido de string para number atraves do cast;
O if declara se o resto da divisão do numero inserido pelo usuário por 2 é igual a 0 (numero par), o console imprime "Passou no teste"
O else declara se a condição for false (não for par, no caso ímpar), o console imprime "Não passou no teste" .

2.
a. Ele abre uma tela onde o usuário insere uma fruta (prompt), e imprime na tela um preço para ela 
   (valor informado pelo case);
b. O preço da fruta  maçã  é  R$  2.25;
c. 24.55;
d. O preço da fruta  Pêra  é  R$  5.

3.
Erro: index.js:30 Uncaught ReferenceError: mensagem is not defined;
Informa que na linha 30 do arquivo js há um erro;
O console.log está no escopo global, ele deveria estar dentro do bloco.

*/

//Exercícios de escrita de código
//4. 
/*a) apararece ambos os números
let numeroA = Number(prompt("Digite um número:"))
let numeroB = Number(prompt("Digite outro número:"))

if(numeroA  > numeroB) {
    console.log(numeroA)
    console.log(numeroB)
} else { 
    console.log(numeroB)
    console.log(numeroA)
}
*/

/*4. b)
let numeroA = Number(prompt("Digite um número:"))
let numeroB = Number(prompt("Digite outro número:"))
let numeroC = Number(prompt("Digite mais um número:"))

if(numeroA > numeroB && numeroA > numeroC){
    console.log("if1 "+ numeroA)
    if(numeroB > numeroC){
        console.log("if1.1 "+numeroB)
    }else{
        console.log("if1.2 "+numeroC)
    }
}else if(numeroB > numeroA && numeroB > numeroC){
    console.log("if2 "+numeroB)
    if(numeroA > numeroC){
        console.log("if2.1 "+numeroA)
    }else{
        console.log("if2.2 "+numeroC)
    }
}else if(numeroC > numeroA && numeroC > numeroB){
    console.log("if3 "+numeroC)
    if(numeroA > numeroB){
        console.log("if3.1 "+numeroA)
    }else{
        console.log("if3.2 "+numeroB)
    }
}else{
    console.log("else "+numeroC)
}
*/

//5. a) imagem no anexo na pasta condicionais

//5. b)


const temOsso = prompt("O animal tem ossos? [s, n].")

    if (temOsso === "s"){
        const temPelos = prompt("O animal tem pêlos? [s, n].")    
        if (temPelos === "s") {
            const racional = prompt("O animal é racional? [s, n].")
                if (racional === "s") {
                    console.log("Homem")
                } else {
                    console.log("Não humano")
                }
        } else {
                const penas = prompt ("o animal tem penas? [s, n]" )
                if (penas === "s"){
                    console.log("Aves")        
                } else {
                    const terrestre = prompt ("o animal é terrestre? [s, n]" )
                    if (terrestre === "s"){     
                        if (viveParteDaVidaNaAgua === "s"){
                            const viveParteDaVidaNaAgua = prompt ("o animal vive parte da vida na água? [s, n]" )
                        } else {
                            console.log("Peixe")
                        }
                    }
                }
            }
    } else {
        console.log("Invertebrado")
    } 