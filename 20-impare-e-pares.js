const input = require('prompt-sync')();



/*

20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou ÍMPAR.

*/











// Sabendo que: 0 é par e 1 é impar e subsequēntimente outros serão nessa ordem.
for (let i = 0; i < 20; i += 1) {
  // Usando operador de resto, temos o poder de imprimir: números imapre e pares.
  // Podemos usar o !para inverter o valor, se impar, então par, ou vise-versa.
  if (i%2 === 0) {
    console.log("Pares: " + i);
    console.log("Impares: " + Number(i+1));
    // Também dá para adicionar mais um ao i.
    // Dará impar.

    // Na matêmatica, para descubrir se um número é par, basta dividir por 2.
    // Todo número que não dar 0 ( no resto ) sem caír nas decimias é impar.
    // ex; 2/2 = 1 logo o resto é 0
    // ex; 5/2 = 2,5 logo o resto também é 0, porém ele caíu nas decimais.
  }
}










