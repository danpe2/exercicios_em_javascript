const input = require('prompt-sync')();















/*


17) Escreva um programa que pergunte a velocidade de um carro. 

Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. 

Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.


*/


console.log(`

Quantia a pagar R$5 por cada km acima da velocidade permitida.
KM permitido: 80km por hora. 

`);
const quilometros = Number(input("Velocidade: "));

if ( quilometros > 80 ) {
  const multa = ((quilometros - 80)*5).toFixed(2);
  console.log(`
  
  - Ultrapassou o limite permitido:

    • Multa de: R$${multa} por km ultrapassado.
    • Ultrapassou: ${quilometros - 80}KM à mais que o permitido.
    • Se o carro ultrapassar 120KM, é CNH cancelada: ${quilometros > 120}.

    `
  );
} else {
  console.log(`

  • Sem ultrapassagem de limite permitido pelo carro.
  
  `);
  
}






















