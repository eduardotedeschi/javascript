// new Object --> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    //__proto__: objA
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);
console.log(Object.getPrototypeOf(objB));
console.log(Object.getPrototypeOf(objA));


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco -= this.preco * percentual / 100;
};
Produto.prototype.aumento = function(percentual){
    this.preco += this.preco * percentual / 100;
};

const p1 = new Produto('Camisa', 50);
p1.aumento(50);
console.log(p1);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(50);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 46
    }
});
p3.nome = 'Calça';
p3.aumento(20);
console.log(p3);


