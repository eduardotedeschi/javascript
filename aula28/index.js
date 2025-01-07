let data = new Date();
console.log(data.toString());
console.log(data);

data = new Date(0);
console.log(data.toString());

const tresHoras = 1000 * 60 * 60 * 3;
const umDia = 1000 * 60 * 60 * 24;
data = new Date(0 + tresHoras + umDia);
console.log(data.toString());

data = new Date(2006, 3, 12, 7, 26, 5);
console.log(data.toString());

data = new Date('2019-08-20 22:52:14');
console.log(data.toString());

data = new Date();
console.log('Dia ' + data.getDate());
console.log('Dia da semana ' + data.getDay()); // 0 - Domingo, 6 - Sábado
console.log('Mês ' + data.getMonth() + 1); // Mês começa em 0
console.log('Ano ' + data.getFullYear());
console.log('Hora ' + data.getHours());
console.log('Minuto ' + data.getMinutes());
console.log('Segundo ' + data.getSeconds());
console.log('Milisegundo ' + data.getMilliseconds());

console.log(Date.now());

function zeroAEsquerda(num){
    return num < 10 ? `0${num}` : num;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

let data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);

