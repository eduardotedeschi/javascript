//Filter --> Sempre retorna um array, com mesma quantidade de elementos ou menos

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const callBackFilter = valor => valor > 10;

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


//Retorne as pessoas que tem o nome com 7 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina em 'a'
const pessoas = [
    {nome: 'Eduardo', idade: 18},
    {nome: 'Maria', idade: 23},
    {nome: 'Luiz', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const nomeMaiorQueSete = pessoas.filter(obj => obj.nome.length >= 7);
console.log(nomeMaiorQueSete);

const pessoasMais50Anos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMais50Anos);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);
