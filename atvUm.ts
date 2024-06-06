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

const teclado = require (`prompt-sync`)();


function recebaMedia(n1: number, n2: number, n3: number, n4: number, n5: number): number{
    let media: number = (n1 + n2 + n3 + n4 + n5) / 5
    return media;
    }


function verificaDor(conferir: number): string{
        if (conferir % 2 == 0) {
            return `P`; // número é par
        } else {
            return `I`; // número é ímpar
        }
    }

function usuarioUm(): void{
    let n1: number = parseInt(teclado(`Digite o numero 1: `));
    let n2: number = parseInt(teclado(`Digite o numero 2: `));
    let n3: number = parseInt(teclado(`Digite o numero 3: `));
    let n4: number = parseInt(teclado(`Digite o numero 4: `));
    let n5: number = parseInt(teclado(`Digite o numero 5: `));
    let media: number = recebaMedia(n1, n2, n3, n4, n5);
    let parImpar: string = verificaDor(media);
    if (parImpar == `I`){
    console.log(`A média é ${media} e é um número ${parImpar}MPAR!`);
    } 
    else{
    console.log(`A média é ${media} e é um número ${parImpar}AR!`);
    }
}
usuarioUm();

