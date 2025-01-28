let nomes = ['Eduardo', 'Gabriel', 'Gislene', 'Danilo', 'Pedro'];
//nomes.splice(índice, qntDelete, addElem1, addElem2, addElem3);
let removido = nomes.splice(-2, 2);
//OBS: Para ir até o final do array basta colocar "Number.MAX_VALUE", ou seja, ira de -2 até o maior número que o js tem.
//nomes.splice(4, Number.MAX_VALUE) -- Vai remover tudo a partir do 4;
console.log(nomes, removido);

nomes = ['Eduardo', 'Gabriel', 'Gislene', 'Danilo', 'Pedro'];
nomes.splice(3, 0, 'João');
console.log(nomes);

nomes = ['Eduardo', 'Gabriel', 'Gislene', 'Danilo', 'Pedro'];
console.log(nomes);
removido = nomes.splice(3, 1, 'João');
console.log(nomes, removido);

nomes = ['Eduardo', 'Gabriel', 'Gislene', 'Danilo', 'Pedro'];
removido = nomes.splice(3, 2, 'Guilherme', 'Fernanda');
console.log(nomes, removido);

//pop
nomes = ['Eduardo', 'Gabriel', 'Gislene', 'Danilo', 'Pedro'];
removido = nomes.splice(-1, 1);
console.log(nomes, removido);

//shift
nomes = ['Eduardo', 'Gabriel', 'Gislene', 'Danilo', 'Pedro'];
removido = nomes.splice(0, 1);
console.log(nomes, removido);

//unshift
nomes = ['Eduardo', 'Gabriel', 'Gislene', 'Danilo', 'Pedro'];
nomes.splice(0, 0, 'Cleide');
console.log(nomes);

//push
nomes = ['Eduardo', 'Gabriel', 'Gislene', 'Danilo', 'Pedro'];
nomes.splice(nomes.length, 0, 'Maria');
console.log(nomes);