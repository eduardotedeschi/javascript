try{
    //É executada quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro'); // Vai direto pro catch sem fechar o arquivo. Não pode!
    console.log(a);
    console.log('Fechei o arquivo no try');
}catch (e){
    //É executada quando há erros
    console.log('Tratando o erro');
}finally{
    //Sempre é executada
    console.log('Fechei o arquivo no FINALLY');
}

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date!');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');

const hora = retornaHora(11);
console.log(hora);
}catch (e){
    //tratar erro
    //console.log(e);
}finally{
    console.log('tenha um bom dia');
}