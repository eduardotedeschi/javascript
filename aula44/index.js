try{
    console.log(NaoExisto)
}catch (err){
    console.log('NaoExisto não existe');
    console.log(err);
}

function soma(x, y){
    if(isNaN(x) || isNaN(y)){
        throw new Error('x e y precisam ser números!');
    }
    return x + y;
}

try{
    console.log(soma(1, 4));
    console.log(soma('e', 4));
}catch(error){
    console.log(error);
    console.log('Alguma coisa mais amigável para o usuário');
}