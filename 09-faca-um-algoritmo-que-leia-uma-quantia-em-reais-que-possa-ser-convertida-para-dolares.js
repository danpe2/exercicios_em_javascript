













/*

9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. 

Considere US$1,00 = R$3,45.

*/



import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
//const resposta = await rl.question("[x]: ");

console.log(`
\n
===========The-convertion=================
NewsReport; 
(Sheron na voz); Hoje meus amigos, o dólar, está em R$3,45, não percam convertam seus reais em dólares e ganhem dinheiro.
================end=======================
\n
`);

const resposta = await rl.question("Carteira: ");

const convert = (Number(resposta/3.45)).toFixed(2);

console.log(`
=======================
Possuo: R$;${resposta}
Cada $1,00, temos R$;3,45
Conversão; US$${convert}
=======================
`);


rl.close();








