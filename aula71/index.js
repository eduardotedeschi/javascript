//defineProperty - defineProperties
function Produto(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Valor
        writable: false, //Se o valor pode ser alterado
        configurable: false //Pode reconfigurar a chave ou apagar a chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
