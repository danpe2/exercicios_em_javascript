













/*



15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.


*/


/*
dis trabalhados em um mês 

dias*8*25

*/
const input = require('prompt-sync')();


const dias = Number(input("Quantia de dias trabalhados: "));
const result = (dias*8*25); // Salário.

console.log(`
Qunato ganha por hora: R$${25}.
Dias trabalhados: ${dias}.
Trabalha por ${8} horas todos os dias.

Calculo do salário: ${result}
`);




























































