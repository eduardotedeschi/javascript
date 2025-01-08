const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Tedeschi',
    idade: 18,
    endereco: {
        rua: 'Capri',
        numero: 151
    },
    pai: 'Roberto',
    mae: 'Gislene'
};

const { nome ='', sobrenome, idade: ano, endereco: {rua}, ...resto} = pessoa;
console.log(nome, sobrenome, ano, rua, resto);