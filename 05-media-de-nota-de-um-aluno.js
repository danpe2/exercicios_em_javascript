















/*

5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina. 

Ex: 
Nota 1: 4.5 
Nota 2: 8.5 

A média entre 4.5 e 8.5 é igual a 6.5

*/


const prompt = require('prompt-sync')();

console.log("\n\n----Calculador de notas versão 0.1----");
console.log("Dígite a a prímeira nota do aluno: ");
const nota1 = Number(prompt("[]: "));
console.log("Digite a segunda nota do aluno: ");
const nota2 = Number(prompt("[]: "));

const media = Number(nota1 + nota2)/2;
console.log("\n--------> A média deste aluno X é de: " + media.toFixed(1));






