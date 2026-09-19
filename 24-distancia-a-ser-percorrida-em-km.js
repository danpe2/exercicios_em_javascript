// stdin é entrada (igual input)
// stdout é saída (ingual output)
const getStdin = require('prompt-sync')();



/*

24) Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. 

Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.


• Minha lista
  • Pedir a distância em quilometro para o usuário.
  • Cobrar R$0.50 centavos para viagens de 200km.
  • Cobar R$0.45 centavos para viagens mais longas.

*/

console.log(`
  
  [PROGRAMA-VIAGENS-RAPÍDAS-COM-CUSTO]
  
  - Para viagens de 200km cobramos R$0.50.
  - Para viagens acima de 200km cobramos R$0.45.

  - São joão: 200km
  - Jão são: 400km
  - Joquinha-city: 500km
  - Melancolia-cidade-nova: 250km

  - Cunstomização: [você decíde]km

  `);
const stdin = Number(getStdin(': '));

if (stdin <= 200) {
  const stdout = (stdin*0.50);
  console.log(`

  Valor a pagar por essa viagem: R$${stdout}
  Quilometros à percorrer: ${stdin}km

  Boa viagem, passageiro.

  `);
} else if (stdin > 200) {
  const stdout = (stdin*0.45);
  console.log(`

  Valor a pagar por essa viagem: R$${stdout}
  Quilometros à percorrer: ${stdin}km

  Boa viagem, passageiro.

  `);
} else {
  console.log('---Invalied-value-bro---');
}






















