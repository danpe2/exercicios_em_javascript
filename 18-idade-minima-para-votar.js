const input = require('prompt-sync')();


















/*

18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.


----------------Breve-resumo-para-deixar-mais-profissional-------------------------

No Brasil, votar não é obrigatório para jovens entre 16 e 17 anos, mas isso não significa que o direito ao voto não possa ser exercido antes da maioridade.

Segundo a Resolução do TSE nº 23.659/2021, adolescentes que completarão 16 anos até o dia da eleição também podem emitir o título de eleitor com antecedência, a partir dos 15 anos.

Para obter o primeiro título, o eleitor pode fazer a solicitação por meio do site JE Digital. Basta acessar a opção “Serviços ao eleitorado”, depois “Título de eleitor” e, por fim, clicar em “Meu primeiro título”.

Também é possível realizar o alistamento eleitoral presencialmente na Central de Atendimento ao Eleitor (Rua Siqueira Campos, 805, Centro Histórico, Porto Alegre), das 10h às 17h, ou nos cartórios eleitorais dos demais municípios gaúchos. Consulte aqui o endereço e o horário de atendimento do cartório da sua cidade.

-----------------------------------------------------------------------------------

*/


console.log(`

    IDADE MINIMA PARA VOTAR

    • Ter ao menos 16 ou 17 anos.
    • Caso tenha completodo 16 anos recentimente, poderá omitir o título de eleitorado.
    • Não é obrigatório ser um votante nas eleicões.
    
    REQUISITO:

    • Não dígite data falsa, isso é crime.
    • Caso dígite uma data falsa, você será multado por 500 reais.
    • Por favor, dígite o ano de nascimento;

`);

// Dígite o ano de nascimento.
// VOCÊ *LEITADO* ELEITORADO, LA ELE.
const ano_nascimento = Number(input("Dígite o ano em que nasceu: "));
const ano_data = new Date();
const ano_atual = ano_data.getFullYear();
const ano_calculado = (ano_atual - ano_nascimento);
if ( ano_calculado >= 16 ) {
  console.log(`

  Acesso: Você está apto a votar.
  Idade: Valído: ${ano_calculado} > 16

  `);
} else if ( ano_calculado < 16 ) {
  console.log(`

  Acesso: Infelizmento você não está apto a votar.
  Idade: Inválida: ${ano_calculado} < 16.

  `);
} else {
  console.log("Dado inválido, por favor, dígite novamente");
}





















