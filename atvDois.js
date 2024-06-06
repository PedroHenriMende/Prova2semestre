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
var teclado = require("prompt-sync")();
function numMaior(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    }
    else if (n2 >= n1 && n2 >= n3) {
        return n2;
    }
    else {
        return n3;
    }
}
function numMenor(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        return n1;
    }
    else if (n2 <= n1 && n2 <= n3) {
        return n2;
    }
    else {
        return n3;
    }
}
function calculoMedia(n1, n2) {
    var media = (n1 + n2) / 2;
    return media;
}
function Principal() {
    var n1 = parseInt(teclado("Digite o numero 1: "));
    var n2 = parseInt(teclado("Digite o numero 2: "));
    var n3 = parseInt(teclado("Digite o numero 3: "));
    var maiorValor = numMaior(n1, n2, n3);
    var menorValor = numMenor(n1, n2, n3);
    var media = calculoMedia(maiorValor, menorValor);
    console.log("-------------------------------------------");
    console.log("O n\u00FAmero maior \u00E9 ".concat(maiorValor, "            |"));
    console.log("O n\u00FAmero menor \u00E9 ".concat(menorValor, "            |"));
    console.log("A m\u00E9dia entre o maior e o menor \u00E9 ".concat(media, "|"));
    console.log("-------------------------------------------");
}
Principal();
