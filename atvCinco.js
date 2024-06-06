/*Pedro Henrique Mendes de Jesus; Tiago Daniel de Souza de Filho; Augusto Lopes Costa da Silva; Vinicius Eduardo
Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que
verificar se o número é par antes de armazenar
no array), no final mostre o Array.
*/
console.clear();
var teclado = require("prompt-sync")();
var numerosPares = new Array(5);
function armazenar() {
    for (var i = 0; i < 6; i++) {
        var num = parseInt(teclado("Insira o ".concat(i + 1, "\u00BA N\u00FAmero: ")));
        if (num % 2 == 0) {
            numerosPares[i] = num;
        }
        else {
            i = i - 1;
        }
    }
    console.log(numerosPares);
}
armazenar();
