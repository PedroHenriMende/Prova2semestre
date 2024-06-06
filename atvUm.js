/* Atividade 1 (30 pontos)

Faça um programa que tenha 3 funções:

1º Função recebe 5 números e retorne a média desses números (10 pontos)

2º Função recebe a média e define se esse número é PAR ou IMPAR,
   o retorno dessa função deve ser P para par e I para impar (10 pontos)

3º Função principal aonde: (10 pontos)
- o usuário digita os 5 números
- aonde é chamada a função que retorna a média
- aonde é chamada a função que retorna P ou I
- nessa função é exibido a mensagem com o valor médio e se o número
é par ou impar

*/
console.clear();
var teclado = require("prompt-sync")();
function recebaMedia(n1, n2, n3, n4, n5) {
    var media = (n1 + n2 + n3 + n4 + n5) / 5;
    return media;
}
function verificaDor(conferir) {
    if (conferir % 2 == 0) {
        return "P"; // número é par
    }
    else {
        return "I"; // número é ímpar
    }
}
function usuarioUm() {
    var n1 = parseInt(teclado("Digite o numero 1: "));
    var n2 = parseInt(teclado("Digite o numero 2: "));
    var n3 = parseInt(teclado("Digite o numero 3: "));
    var n4 = parseInt(teclado("Digite o numero 4: "));
    var n5 = parseInt(teclado("Digite o numero 5: "));
    var media = recebaMedia(n1, n2, n3, n4, n5);
    var parImpar = verificaDor(media);
    if (parImpar == "I") {
        console.log("A m\u00E9dia \u00E9 ".concat(media, " e \u00E9 um n\u00FAmero ").concat(parImpar, "MPAR!"));
    }
    else {
        console.log("A m\u00E9dia \u00E9 ".concat(media, " e \u00E9 um n\u00FAmero ").concat(parImpar, "AR!"));
    }
}
usuarioUm();
