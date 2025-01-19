function somarNumeros(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
somarNumeros(3, 7, 10, 5);

const somaNumeros = (...args) => {
    let total = 0;
    for(let argumento of args){
        total += argumento;
    }
    console.log(total);
};
somaNumeros(3, 7, 10, 5);
