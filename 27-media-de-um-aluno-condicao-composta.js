const getStdin = require('prompt-sync')();













/*

27) Crie um programa que leia duas notas de um aluno e calcule a sua média, mostrando uma mensagem no final, de acordo com a média atingida: 

    - Média até 4.9: REPROVADO 
    - Média entre 5.0 e 6.9: RECUPERAÇÃO 
    - Média 7.0 ou superior: APROVADO

*/



const nomeDoAluno = String(getStdin('Dígite o nome do aluno(a) completo: '));
const notaDoAluno1 = Number(getStdin('Dígite a primeira nota do aluno(a): '));
const notaDoAluno2 = Number(getStdin('Dígite a segunda nota do aluno(a): '));

const media = (notaDoAluno1 + notaDoAluno2)/ 2;
const nome = nomeDoAluno;

if (media <= 4.9) {
    
    console.log('REPROVADO: ' + nome)
    
    console.log('Media: ' + media);
  
  } else if (media >= 5.0 || media <= 6.9) {
    
    console.log('RECUPERAÇÃO: ' + nome);
    
    console.log('Media: ' + media);
  
  } else if (media >= 7.0) {
    
    console.log('APROVADO: ' + nome);
    
    console.log('Media: ' + media);

}




















