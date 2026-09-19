const input = require('prompt-sync')();










/*

21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.

*/

console.log('Dígite o ano para veríficar se é um ano bissexto; ');

const ano = Number(input(': '));

const ano_bissexto = ano%4 === 0;

// Todo ano bissexto é divisivel por 4, aquele não caí em decimais.
// O operador (%) sempre retorna o resto a divisão, nunca caí em decimal.

if (ano_bissexto) 
  console.log('É um ano bissexto: ',  ano_bissexto);
else 
  console.log('Não é um ano bissexto: ', ano_bissexto);
  
  

































