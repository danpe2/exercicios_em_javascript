const getStdin = require('prompt-sync')();


















/*

25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta. 

Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.



- Minha lista
  - Peça um, dois e três segmentos de um triângulo para o usuário.
  - Faça um calculo que veja se com esses segmentos são possível formar um triângulo.
  - Caso sim, então retorne se é possível.
  - Casonão, então retorne que não é possível.

*/

let arraySegmento = [];
let i = 0;
while (i<3) {  
  (i===0) ? console.log('ígite o primeiro segmento') : NaN;
  (i===1) ? console.log('Dígite o seundo segmento') : NaN;
  (i===2) ? console.log('Dígite o terceiro segmento') : NaN;
  i+=1;    
  const stdin = Number(getStdin('Dígite o segmento: '));
  arraySegmento.push(stdin);
}
const sumSegmento = arraySegmento[0] + arraySegmento[2];
const segmentoUm = arraySegmento[0];
const segmentoDois = arraySegmento[1];
const segmentoTres = arraySegmento[2];
if(sumSegmento > arraySegmento[2])
  console.log(`

  A = ${segmentoUm}
  B = ${segmentoDois}
  C = ${segmentoTres}

  A + B > C 

  É possível criar um triângulo.

  `);
else 
  console.log(`

  A = ${segmentoUm}
  B = ${segmentoDois}
  C = ${segmentoTres}

  A + B < C

  Não é possível criar um triângulo.

  `);



























