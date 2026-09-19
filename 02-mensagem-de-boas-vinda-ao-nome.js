














const input = require('prompt-sync')();

console.log("\nDigíte seu nome; ...\nDigíte s para saír: ...\n");

while ( true ) {
  const nome = String(input("[Dígite seu nome]: "));
  if ( nome.toLowerCase() === "s" ) { break; };
  
  function Welcome(nameWelcome) {
    console.log("Bem-vindo ao programa return: " + nameWelcome + " aqui você será bem recebido" + " aqui você será bem recebido com vosco");
  }
  
  Welcome(nome);

}

