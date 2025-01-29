//defineProperty - Gtter e Setter
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        configurable: true, //Pode reconfigurar a chave ou apagar a chave
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(isNaN(valor)){
                throw new TypeError('estoque is Nan');
            }
            estoquePrivado = valor;
        }
    });

}

const p1 = new Produto('Camisa', 20, 3);
//console.log(p1);
p1.estoque = 'dsdsd'; //Esse é o valor que a função 'set' está recebendo
console.log(p1.estoque);

