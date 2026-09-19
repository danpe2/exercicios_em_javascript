













/*

7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte. 

Ex: 

Digite um número: 3.5 O dobro de 3.5 é 7.0 A terça parte de 3.5 é 1.16666

*/
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

console.log("Digíte um número real: ");
const resposta = await rl.question("[x]: ");

const double = Number(2*resposta);
const terca = Number(resposta/3);

console.log(`
O número é ${resposta}, seu dobro é ${double} e sua terça parte é ${terca.toFixed(4)}
`);








rl.close();










