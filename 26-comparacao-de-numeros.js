const getStdin = require('prompt-sync')();













/*

26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando na tela uma das mensagens abaixo: 

  - O primeiro valor é o maior 
  - O segundo valor é o maior 
  - Não existe valor maior, os dois são iguais

*/

console.log(`
    
    Comparação se valores:

    X > Y = X é maior que Y ?
    X < Y = X é menor que y ?

    5 > 4 = verdade
    4 < 6 = verdade

  
  `);

const stdin1 = Number(getStdin('Dígite o primeiro número: '));
const stdin2 = Number(getStdin('Dígite o segundo número: '));

if(stdin1 > stdin2){
  console.log(`
  O prímeiro número é maior que o segundo:
  ${stdin1} > ${stdin2}  
  `);
}else if(stdin1 < stdin2){
  console.log(`
  O prímeiro número é menor que o segundo:
  ${stdin1} < ${stdin2}
  `);
}else if(stdin1 === stdin2){
  console.log(`
  Os números são iguais:
  ${stdin1} = ${stdin2}
  `);
}else{
  console.log(`
  Valor ${stdin1} ou ${stdin2} são/é inválido!
  `);
}






