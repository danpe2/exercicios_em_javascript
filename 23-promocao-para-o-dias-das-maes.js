const input = require('prompt-sync')();











/*

23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. 

Sabendo que: 
  
  - Homens ganham 5% de desconto 
  - Mulheres ganham 13% de desconto


Minha lista: Precisa dê

  - Uma entrada que peça o nome da pessoa.
  - Uma entrada que peça o sexo da pessoa.
  - Uma entrada que peça o valor do produto de compra.
  - Adicione desconto de 5% porcento para produtos que homens compram.
  - Adicione desconto de 13% porcento para produtos que mulheres compram.
  - Calcule e mostre o resultado.

*/

// Perguntas;
console.log(`
  
  🎉Feliz dia das mães🎉

  🎉Hoje temos descontos extras para todos!

  🎉Compre a agora seus produtos;
  👩Mulheres têm 13% de desconto.
  👦Homens têm 5% de desconto.

  🎉Não percam, façam suas compras agora com um clique de distância!

  ------------------------------------
  | Nome.
  | Gênero [masculino] ou [feminino].
  | Preço do produto escolhido.
  |
  | Faremos a entraga com frete grátis.
  -------------------------------------
  
  `);

const nomeDaPessoa = String(input('Nome com quem se encontra: '));
const sexoDaPessoa = String(input('Qual seu gênero: '));
const precoDoProduto = Number(input('Quanto custa o produto: '));

// Calculando;
if (sexoDaPessoa.toLowerCase() === 'masculino') { 
  const calculandoPreco = precoDoProduto-(precoDoProduto*0.05);
  console.log(`

  Nome: ${nomeDaPessoa}
  sexo: ${sexoDaPessoa}
  Preço do produto: R$${precoDoProduto}
  Preço com desconto: R$${calculandoPreco}!

  Compra feita com sucesso!
  *Enviaremos de acordo com sua localização*

  `);
} else if (sexoDaPessoa.toLowerCase() === 'feminino') {
  const calculandoPreco = precoDoProduto-(precoDoProduto*0.13);
  console.log(`

  Nome: ${nomeDaPessoa}
  sexo: ${sexoDaPessoa}
  Preço do produto: R$${precoDoProduto}
  Preço com desconto: R$${calculandoPreco}

  Compra feita com sucesso!
  *Enviaremos de acordo com sua localização*

  `);
} else {
  console.log('-------Invalide input--------');
}


























