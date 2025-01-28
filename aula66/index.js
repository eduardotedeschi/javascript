//Map --> Sempre retorna um array, com mesma quantidade de elementos

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave "id" em cada objeto
const pessoas = [
    {nome: 'Eduardo', idade: 18},
    {nome: 'Maria', idade: 23},
    {nome: 'Luiz', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const removerNomes = pessoas.map(obj => {
    const newObj = {...obj};
    delete newObj.nome;
    return newObj;
});
console.log(removerNomes);

const adicionaIndice = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = (indice + 1) * 1000;
    return newObj;
});
console.log(adicionaIndice);

console.log(pessoas);

