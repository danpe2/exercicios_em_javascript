
















/*

8) Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas. 

Ex:

Digite uma distância em metros: 185.72 

A distância de 85.7m corresponde a: 0.18572Km 1.8572Hm 18.572Dam 1857.2dm 18572.0cm 185720.0mm


*/

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const resposta = await rl.question("[x]: ");

console.log("————————————————\nDêsponibilize um número em metros\nO número será convertido em;\nQuilômetros\ndecimetros\ncentimetros\nmilimetros\n—————————————\n");

// quilômetros
const km = Number(resposta/100);
const dm = Number(resposta*10);
const cm = Number(resposta*100);
const mm = Number(resposta*1000);

// Mostrando o resultado
console.log(`
Número em mêtros: ${resposta}m
Para quilômetros: ${km}km
Para decimetros: ${dm}dm
Para centimetros: ${cm}cm
Para milimetros: ${mm}mm
`);


rl.close();



















