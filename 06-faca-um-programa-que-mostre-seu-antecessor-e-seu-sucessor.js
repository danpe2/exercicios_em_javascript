









/*


6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor. 

Ex: 

Digite um número: 9 

O antecessor de 9 é 8 O sucessor de 9 é 10


*/

// const = variável
// prompt = idenficador
// require = expressão
// 'prompt-sync' = string
const prompt = require('prompt-sync')();

// console. = idenficador
// log = expressão
console.log("\----Informe-o-número-para-mostrar-seu-sucessor----");
console.log("---infrome-o-número-para-mostrar-seu-antecessor----\n");

const value = Number(prompt("Digíte o número: "));

// Eu posso fazer no proprío console.log(), porém ireí fazer desta forma.
const sucessor = value + 1;
const antecessor = value - 1;

console.log("O sucessor de " + value + " é " + sucessor + "\nO antecessor de " + value + " é " + antecessor + "\n");
