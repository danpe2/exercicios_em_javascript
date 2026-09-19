


















/*


10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.


*/

// A área é a parte de dentro do triângulo ou quadrado.
// O perímetro é a soma dos lados.
const prompt = require('prompt-sync')();

// Digíte em metros.

console.log("Digíte a largura e altura para calcular a área; ");
const largura = Number(prompt("Digíte a largura: "));
const altura = Number(prompt("Digíte a altura: "));
const allmath = (largura*altura);
const perimetro = ((largura*2)+(altura*2));
const result = (allmath/2);

console.log(`
Largura: ${largura}m
Altura: ${altura}m
Área: ${allmath}
Perimêtro: ${perimetro}

Quantidade de litros que será usado: ${result} litros de tinta.
`);












