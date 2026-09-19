const getStdin = require('prompt-sync')();








/*


25-1-extra-meu: Crie um program que compare e impríma no console.
Caso maior então X > Z 
Caso menor entãi X < Z 


*/


console.log('Dígite dois número para mostrar qual será maior que qual; ');
const stdin1 = Number(getStdin('Dígite o primeiro número: '));
const stdin2 = Number(getStdin('Dígite o segundo número: '));

const stdout = (stdin1 > stdin2) ? 
  ('Sim, ' + stdin1 + ' > ' + stdin2 + '\n\n' + ' 0 - - - ' + stdin2 + ' > - - - - - - - - - - - - - - - - ' + stdin1 + ' > ') : ('Não, ' + stdin1 + ' < ' + stdin2);

console.log(stdout);
