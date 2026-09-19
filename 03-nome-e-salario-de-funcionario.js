








// Data dos funcionarios
const funcionarios = [ // variável mais idenficador mais igual mais inicializador de array.
  {                    // inicializador de objeto.
    nome: "Ana Julha", // literal String
    salario: 2300.34,  // literal Flout Number
    anos: 5            // literal Number
  },
  {
    nome: "João Pereira", // nome é uma propríedade do objeto.
    salario: 6200.50,
    anos: 10
  }
];



// function uma palavra-chave.
// planilha é uma expressão.
// () tudo dentro é argumento.
// { depois das chaves, aqui é chamo de função.
// função é tudo que tem dentro das chaves.
function planilha(nome, salario, anos) {
  const salario_por_ano = salario * anos;
  console.log(`
  Funcionario(a): ${nome},
  Salário: ${salario},
  Salário por ano: ${salario_por_ano}
  `);
}

// loop for com controle.
for(let i = 0; i < funcionarios.length; i += 1 ) {
  planilha(
  funcionarios[i].nome,   // metódo, quando usamos .algoCoisa.
  funcionarios[i].salario, 
  funcionarios[i].anos
  );

}

