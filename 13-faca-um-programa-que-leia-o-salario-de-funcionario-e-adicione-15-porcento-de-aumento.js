









/*


13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.


*/


function calc(x) {
  // Basícamento quanto maior o salário do funcionário mais é o tempo integrado na empresa, logo ele receberá aumentos maiores.
  const promotion = x < 1500 && (x*1.05) || x >= 1500 && (x*1.15) || x >= 2500 && (x*1.20) || x >= 3500 && (x*1.30);
  return promotion.toFixed(2);
}

const input = require('prompt-sync')();


const salario = Number(input("Dígite o salário do colaborador: "));

console.log(`
  O aumento é de acordo com tempo empregado na empresa  R$${calc(salario)}
  `);











