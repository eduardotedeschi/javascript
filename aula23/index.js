/*
&& -> false && true -> false "o valor falso mesmo"
|| -> true || false -> true "o valor verdadeiro mesmo"

FALSY
false
0
"" '' ``
null / undefined
NaN
*/

console.log('Maria' && 0 && 'Joao');
console.log('Maria' && 'Joao');
console.log('Maria' && 0 && 'Joao' && '');


function falaOi(){
    return 'oi';
}
let vaiExecutar = "";
console.log(vaiExecutar && falaOi());
vaiExecutar = "sim";
console.log(vaiExecutar && falaOi());

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
