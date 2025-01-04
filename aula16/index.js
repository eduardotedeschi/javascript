let nomes = ['Julia', 'Pedro', 'Tentação'];

console.log(nomes.length);

nomes.push('Leonardo');
console.log(nomes);

nomes = ['Julia', 'Pedro', 'Tentação'];
nomes.unshift('Rodriguinho');
console.log(nomes);

nomes = ['Julia', 'Pedro', 'Tentação'];
let removido = nomes.pop();
console.log(removido, nomes);

nomes = ['Julia', 'Pedro', 'Tentação'];
delete nomes[1];
console.log(nomes);

nomes = ['Julia', 'Pedro', 'Tentação'];
console.log(nomes.slice(1, 3));
console.log(nomes.slice(0, -1));

console.log(nomes instanceof Array);
