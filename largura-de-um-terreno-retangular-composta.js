const getStdin = require('prompt-sync')();











/*


28) Faça um programa que leia a largura e o comprimento de um terreno retangular, calculando e mostrando a sua área em m². O programa também devemostrar a classificação desse terreno, de acordo com a lista abaixo: 

  
  - Abaixo de 100m² = TERRENO POPULAR 
  - Entre 100m² e 500m² = TERRENO MASTER 
  - Acima de 500m² = TERRENO VIP

*/


console.log(`
      

      [=======Calculando=Terreno=Para=Venda=======]
      |# POPULAR 
      |# TERRENO MASTER
      |# TERRENO VIP
      [=======Calculando=Terreno=Para=Venda=======]

`);

const stdin_largura = Number(getStdin('Dígite a largura do terreno: '));
const stdin_comprimento = Number(getStdin('Dígite o comprimento do terreno: '));

const terrenoEmMetro = stdin_largura*stdin_comprimento;

if (terrenoEmMetro <= 100) {
  console.log('O terreno é popular: ' + terrenoEmMetro + 'm²');
} else if (terrenoEmMetro >= 130 && terrenoEmMetro <= 500) {
  console.log('O terreno é master: ' + terrenoEmMetro + 'm²');
} else if (terrenoEmMetro > 500) {
  console.log('O terreno é vip: ' + terrenoEmMetro + 'm²');
}





















