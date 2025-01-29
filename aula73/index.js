/*
Object.value
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

//Já vimos
Object.keys (retorna todas as chaves)
Object.freeze (trava o objeto)
Object.defineProperty (define as propriedades de um atributo)
Object.defineProperties (define as propriedades de vários atributos)
*/
const produto = {nome: 'Produto', preco: 1.8, material: 'random'};
//const caneca = Object.assign({}, produto, {material: 'porcelana'}, {cor: 'preto'}); //Também copia as propriedades de um objeto
const caneca = {
    ...produto, //Copia as propriedades do objeto
    material: 'porcelana',
    cor: 'preto'
};
caneca.nome = 'caneca';
caneca.preco = 2.5;
console.log(produto);
console.log(Object.keys(produto));
console.log(caneca);
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // descreve as propriedades do atributo do produto
console.log(Object.values(produto));
console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}




