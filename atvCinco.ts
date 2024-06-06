/*Pedro Henrique Mendes de Jesus; Tiago Daniel de Souza de Filho; Augusto Lopes Costa da Silva; Vinicius Eduardo
Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que 
verificar se o número é par antes de armazenar 
no array), no final mostre o Array. 
*/

console.clear();

const teclado = require (`prompt-sync`)();

let numerosPares: number [] = new Array(5);

function armazenar(): void{
    for(let i = 0; i < 6; i++){
        let num: number = parseInt(teclado(`Insira o ${i + 1}º Número: `))
        if(num % 2 == 0){
            numerosPares[i] = num;
        } else{
            i = i - 1;
        }
    }
    console.log(numerosPares);
}
armazenar();
