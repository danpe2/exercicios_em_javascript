

















/*

11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor de Delta.

A equação do segundo grau recebe esse nome porque é uma equação polinomial cujo termo de maior grau está elevado ao quadrado. Também chamada de equação quadrática, é representada por:


ax² + bx + c = 0


Numa equação do 2º grau, o x é a incógnita e representa um valor desconhecido. Já as letras a, b e c são chamadas coeficientes da equação.


Os coeficientes são números reais e o coeficiente a tem que ser diferente de zero, pois do contrário passa a ser uma equação do 1º grau.


bx + c = 0


Resolver uma equação de segundo grau, significa determinar os valores reais de x, que tornam a equação verdadeira. Esses valores são denominados raízes da equação.



Equações do 2º Grau Completas e Incompletas

As equações do 2º grau completas são aquelas que apresentam todos os coeficientes, ou seja a, b e c são diferentes de zero (a, b, c ≠ 0).


ax² + bx + c = 0


Por exemplo, a equação 5x2 + 2x + 2 = 0 é completa, pois todos os coeficientes são diferentes de zero (a = 5, b = 2 e c = 2).


Uma equação do segundo grau é incompleta quando b = 0 ou c = 0 ou b = c = 0.

Exemplo 1 — equações do 2° grau incompletas 


2x² = 0 é incompleta, pois a = 2, b = 0 e c = 0.
x + 2 = 0 é incompleta, pois b = 0.
-3x² - 2x = 0 é incompleta, pois c = 0 


A receita do Delta diz: Multiplique o B por ele mesmo. Depois, multiplique 4 vezes o A vezes o C. No final, diminua o primeiro resultado pelo segundo.



*/

const prompt = require('prompt-sync')();

console.log("Calculadora de equação do 2º grau. Dígite os três valores: ");
const a = Number(prompt("a = ; "));
const b = Number(prompt("b = ; "));
const c = Number(prompt("c = ; "));

// Calculando delta;
const result = ( b * b ) - ( 4 * a * c );


console.log(`
|O valor de delta: ${result}
|A fórmula;                 
|${a}x² + ${b}x + ${c} = 0  
`);





