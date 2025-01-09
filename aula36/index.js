const frutas = ['Pera', 'Maçã', 'Uva'];

//For in --> Lê os índices do array ou chaves do objeto
for (let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa ={
    nome: 'Eduardo',
    sobrenome: 'Tedeschi',
    idade: 18
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

const string = 'Biscoito';
for (let i in string){
    console.log(i);
}

