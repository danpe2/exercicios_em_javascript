













/*

14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. 

Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.


*/

function alugadora(car, km, day) {
  const returnValue = (((car*day)+(km*0.20)).toFixed(2));
  return returnValue;
}

const input = require('prompt-sync')();

console.log("Dígite o valor do carro de aluguel; ");
const carro_valor = Number(input("Dígite: "));
console.log("Dígite a quantia de quilomêtros rodados pelo carro; ");
const quilometro_rodado = Number(input("Dígite: "));
console.log("Dígite agora a quantia de dias usado; ");
const dia_usado = Number(input("Dígite: "));


// const result = ((dia_usado*carro_valor) + (quilometro_rodado*0.20)).toFixed(2);

console.log(`
Para cada quilomêtros rodados: Paga-se R$0.20 reais.
Para cada dia de uso; Paga-se o valor do aluguel R$${carro_valor} valor do aluguel.

Total a pagar: ${alugadora(carro_valor, quilometro_rodado, dia_usado)}
`);




