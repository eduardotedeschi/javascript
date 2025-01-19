function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo!');
console.log(resto);

function duplicar(n){
    return n * 2;
}
function triplicar(n){
    return n * 3;
}
function quadriplicar(n){
    return n * 4;
}

console.log(duplicar(2));
console.log(triplicar(2));
console.log(quadriplicar(2));

function multiplicador(multiplicador){
    return function (n){
        return n * multiplicador;
    }
}

const duplica = multiplicador(2);
const triplica = multiplicador(3);
const quadriplica = multiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
