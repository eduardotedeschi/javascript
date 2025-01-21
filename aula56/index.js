//Factory Function (função fábrica)
function criaPessoa(nome, sobrenome, p, a){
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto(){
            return this.nome + ' ' + this.sobrenome;
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        idade: 18,
        descricao(hobbie = 'fazer nada'){
            return `${this.nomeCompleto} possui ${this.idade} anos e seu hobbie é ${hobbie}.`;
        },
        peso: p,
        altura: a,

        //Getter
        get imc(){
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Eduardo', 'Tedeschi', 72, 1.7);
console.log(p1.descricao('jogar'));
console.log(p1.imc);
p1.nomeCompleto = 'Danilo Rodrigues da Costa'
console.log(p1.descricao('jogar'));
