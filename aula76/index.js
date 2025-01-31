//Produto --> nome, preço, aumento, desconto
//Camiseta --> cor Caneca --> material, estoque
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){
    this.preco += valor;
}

Produto.prototype.desconto = function(valor){
    this.preco -= valor;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);

Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);

    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function(percentual){
    this.preco += this.preco*percentual/100;
}
Caneca.prototype.desconto = function(percentual){
    this.preco -= this.preco*percentual/100;
}

const produto = new Produto('Genérico', 100);
const camiseta = new Camiseta('Regata', 60, 'Preta')
const caneca = new Caneca('Caneca', 30, 'Porcelana', 31);
console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);

produto.desconto(15);
camiseta.aumento(20);
caneca.aumento(50);
caneca.estoque = 40;

console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);