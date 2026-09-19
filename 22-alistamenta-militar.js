const input = require('prompt-sync')();








/*


22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar. 

  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento. 
  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.

*/

/* Minha solução matêmatica

por exemplo
ano que nasceu: 2009
ano atual: 2026
ano que precisa: 18

idade: 2026 - 2009 = 17
idade = 17

anos restantes: 18 - 17 = 1
anos restantes é: 1 ano

tudo em uma conta: 18 - (2026 - 2009) = 1

e os anos depois ( depois de 18, maior que 18 ) é mais facíl de entender.
por que é só tirar 18 da idada atual da peessoa

2026 - 1989 - 18 = 23

É o ano que se passou deste o alistamento apto.

*/
const anoNascido = 2009;
const anoAlistamento = 18;
const anoAtual = 2026;

const anoNascidoCalc = anoAtual-anoNascido;
const anoNascidoCalculadoDepois = anoAtual-anoNascido-anoAlistamento;

if (anoNascidoCalc <= anoAlistamento )
  console.log(`

  Sua idade atual: ${anoNascidoCalc}
  Idade apta para o alistamento: ${anoAlistamento}
  Anos que faltam para o alistamento: ${anoAlistamento-anoNascidoCalc}
  
  Você não está apto a se alistar.

  `);
  // Tira 17 de 18 = 1, faz sentido, 
  // é a idade permitida menos idade calculada 
else 
  console.log(`

  Sua idade atual: ${anoNascidoCalc}
  Idade apta para o alistamento: ${anoAlistamento}
  Anos passados: ${anoNascidoCalculadoDepois}

  🎉Você não obrigado a se alistar 

  `);




/*
const ano = 2009
console.log(`
${2026-ano}
// 
${(2026-ano-18)} 
// Tempo que já passou deste de meu alistameto de 18 anos.
`);
*/




















