


















/*

16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

*/

/*

Vamos pensar:

por exemplo: ele fuma 5 cigarros por dia.
E ele já é fumante a 2 anos.
Se ele perde 10 minutos de vida a cada cigarro.

( uma forma simplifica seria (2*5 - 10) )

Se um dia tem 24 horas.
Um ano tem 360 dias.

360+360 = 720×24 = 17.280 horas

  720
   24
 2880
1440

17.280 

ou é divisao ?

720/24 = 30



5*720 = Total de cigarros.
Total de cigarros * 10 minutos
24*60 =  Um dias em minutos.


anos × 360 = dias
dias × cigarrosPorDia = cigarrosTotais
cigarrosTotais × 10 = minutosPerdidos
minutosPerdidos ÷ 60 = horasPerdidas
horasPerdidas ÷ 24 = diasPerdidos



*/

const input = require('prompt-sync')();

console.log(`

._____________________________.

|-  Hóspital Fernado Silva   -|
._____________________________.
|=Instituição de reabilitação=|
'————————————————————————————————.
| • Aberto 24 horas por 7 dias.  |
| • Atendimento virtual ao vício.|
|                                |
'————————————————————————————————'

`);
console.log("Por favor, dígite a quantia de cigarro que este paciênte fuma por dia; ");
const quantia = Number(input(": "));
console.log("Por quantos anos ele fuma senho(a)r; ");
const anos = Number(input(": "));

const result = anos*360*quantia*10/60/24;

console.log(result);



































