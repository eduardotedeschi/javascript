//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Eduardo', idade: 18},
    {nome: 'Maria', idade: 23},
    {nome: 'Luiz', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const velho = pessoas.reduce((objAcumulador, obj) => objAcumulador.idade > obj.idade ? objAcumulador : obj);
console.log(velho);
