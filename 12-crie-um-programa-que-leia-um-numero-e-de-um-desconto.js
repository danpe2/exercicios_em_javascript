

















/*

12) Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.


*/


const input = require('prompt-sync')();

const produtos = {
  label1: "arroz", food1: (5.99 - (5.99*0.50)).toFixed(2),
  label2: "feijão", food2: (7.99 - (7.99*0.50)).toFixed(2),
  label3: "bolacha de água e sal", food3: (10.9 - (10.9*0.50)).toFixed(2)
}

console.log(
`Produtos: Promoção do dia 5% de desconto!
| quilo     | preço |
|===========|=======|
| Arroz     | R$5,99|[1]
| Feijão    | R$7,99|[2]
| BolachaAS | R$10,9|[3]
|===================|
`);

const opcao = Number(input("Dígite o número do produto: "));

console.log(`
!Produto com 5% de desconto!
${opcao === 1 && produtos.label1 || opcao === 2 && produtos.label2 || opcao === 3 && produtos.label3}: ${ opcao === 1 && produtos.food1 || opcao === 2 && produtos.food2 || opcao === 3 && produtos.food3} com desconto
`);













