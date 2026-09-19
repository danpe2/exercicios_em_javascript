














const prompt = require('prompt-sync')();



console.log("------Calculadora de soma, so soma-----");
const valor1 = Number(prompt("Dígite o primerio número: "));
const valor2 = Number(prompt("Dígite o segundo número: "));

const result = Number(valor1 + valor2);

console.log(`Soma de: ${valor1} e ${valor2} = ${result}`);
