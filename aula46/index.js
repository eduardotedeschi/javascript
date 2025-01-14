function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);

setTimeout(function (){
    clearInterval(timer);
}, 15000);

setTimeout(function (){
    console.log(`ACABOU! em ${mostraHora()}`);
}, 18000);