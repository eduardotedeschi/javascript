let pessoa1 = {
    nome: 'Joana',
    sobrenome: 'Dark',
    idade: 70
};

/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome = nome,
        sobrenome = sobrenome,
        idade = idade
    };
}
*/

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
pessoa1 = criaPessoa('Eduardo', 'Tedeschi', 18);
let pessoa2 = criaPessoa('Roberto', 'Carlos', 59);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);

pessoa1 = {
    nome: 'Eduardo',
    sobrenome: 'Tedeschi',
    idade: 18,  

    fala() {
        console.log(`Olá mundo, me chamo ${this.nome} ${this.sobrenome} e minha idade é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();