//Função contrutora ---> retorna objetos
//Contrutora --> Pessoa (new)

function Pessoa(nome, sobrenome){
    //Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function (){

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodoPublico = function (){
        console.log(this.nome + ': sou um método.');
    };
}

const p1 = new Pessoa('Eduardo', 'Tedeschi');
const p2 = new Pessoa('Gislene', 'Auxiliadora');

p1.metodoPublico();