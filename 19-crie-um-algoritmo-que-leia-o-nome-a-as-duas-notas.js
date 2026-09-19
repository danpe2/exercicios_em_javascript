const input = require('prompt-sync')();













/*

19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. 

No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).

*/


// Maior media 7.0

//--------------------
// Muito boa X > 7.0
// Boa X === 7.0
// Mediano X < 7.0
// Ruim X <= 4.0
// Muito ruim X >= 2.0
//----------------------

const nome = String(input("Nome do aluno: "));
const nota1 = Number(input("Nota1: "));
const nota2 = Number(input("Nota2: "));

const media = nota1 + nota2;
const media_data = (nota1 + nota2).toFixed(1);

if ( media > 7 ) {
  console.log(`

  A nota do aluno foi dê: ${media_data}.
  Muito boa note, ${nome}. parabêns.

  `);
} else if ( media === 7 ) {
  console.log(`

  A nota do aluno foi dê: ${media_data}.
  Uma boa nota, ${nome}.

  `);
} else if ( media < 7 && media >= 5 ) {
  console.log(`

  A nota do aluno foi dê: ${media_data}.
  Uma nota mediana, ${nome}.

  `);
} else if ( media < 4 && media >= 3 ) {
  console.log(`

  A nota do aluno foi dê: ${media_data}.
  Você foi mal, ${nome} nas sua medias.

  `);
  
} else if ( media < 2 && media >= 1 ) {
  console.log(`

  A nota do aluno foi dê: ${media_data}.
  Você foi muito mal, ${nome}, mas não se preoucupe, ainda tem o próximo ano.

  `);

} else {
  console.log("Valor inválido");
}












































