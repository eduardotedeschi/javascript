/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para o outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora --> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => `ORIGINAL ${this.nome} ${this.sobrenome}`; // Se existir isso, ele é quem será enviado, pois o motor do js lê ele primeiro
}

Pessoa.prototype.nomeCompleto = function (){
    return `${this.nome} ${this.sobrenome}`;
}

// instância
const pessoa1 = new Pessoa('Eduardo', 'R.'); // <- Pessoa = função construtora
const pessoa2 = new Pessoa('Gislene', 'A.'); // <- Pessoa = função construtora
const data = new Date(); // <- Date = função contrutora

console.log(pessoa1);
console.log(pessoa1.nomeCompleto());
console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
