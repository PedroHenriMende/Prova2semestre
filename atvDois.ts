/*Pedro Henrique Mendes de Jesus; Tiago Daniel de Souza de Filho; Augusto Lopes Costa da Silva; Vinicius Eduardo
Atividade 2 - (40 pontos)
Crie um programa que tenha 4 funções:

1º Função recebe 3 números e retorna o número maior (10 pontos)

2º Função recebe 3 números e retorna o número menor (10 pontos)

3º Função recebe o valor maior e o valor menor e retorna 
a média desses números (10 pontos)

4º Função (principal) deve: (10 pontos)
- receber os três valores digitados
- receber o retorno do valor maior
- receber o retorno do valor menor
- receber a média do valor maior e menor
- exibir o número maior, o número menor e a média

*/

console.clear();
const teclado = require (`prompt-sync`)();


function numMaior (n1: number, n2: number, n3: number): number{
    if (n1 >= n2 && n1 >= n3){
        return n1;
    }
    else if (n2 >= n1 && n2 >= n3){
    return n2;
    }
    else {
    return n3;
    }
}


function numMenor(n1: number, n2: number, n3: number): number{

    if (n1 <= n2 && n1 <= n3){
        return n1;
    }
    else if (n2 <= n1 && n2 <= n3){
    return n2;
    }
    else {
    return n3;
    }
}


function calculoMedia(n1: number, n2: number): number{
    let media: number = (n1 + n2) / 2;
    return media;
}


function principal(): void{
    let n1: number = parseInt(teclado(`Digite o numero 1: `));
    let n2: number = parseInt(teclado(`Digite o numero 2: `));
    let n3: number = parseInt(teclado(`Digite o numero 3: `));
    
    let maiorValor: number = numMaior(n1, n2, n3);
    let menorValor: number = numMenor(n1, n2, n3);
    
    let media: number = calculoMedia(maiorValor, menorValor);

console.log(`-------------------------------------------`)
console.log(`O número maior é ${maiorValor}            |`);
console.log(`O número menor é ${menorValor}            |`);
console.log(`A média entre o maior e o menor é ${media}|`)
console.log(`-------------------------------------------`)
}
principal();
