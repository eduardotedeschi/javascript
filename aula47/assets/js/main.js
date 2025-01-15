
function escopo(){
    const relogio = document.querySelector('.relogio');

    let seg = 0;
    let segundoTimer;

    function formataHora(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    function exibir(segundo){
        relogio.textContent = formataHora(segundo);
    }

    function iniciarRelogio(){
        relogio.className = 'relogio';
        clearInterval(segundoTimer);
        segundoTimer = setInterval(function(){
            seg++;
            exibir(seg);
        }, 1000);
    }

    function pausarRelogio(timer){
        clearInterval(timer);
        relogio.className = 'relogio pause';
    }

    function zerarRelogio(){
        clearInterval(segundoTimer);
        relogio.className = 'relogio';
        seg = 0;
        exibir(seg);
    }

    document.addEventListener('click', function(e){
        const elemento = e.target;
        if(elemento.classList.contains('iniciar')){
            iniciarRelogio();
        }
        if(elemento.classList.contains('pausar')){
            pausarRelogio(segundoTimer);
        }
        if(elemento.classList.contains('zerar')){
            zerarRelogio(segundoTimer);
        }
    });

}
escopo();
