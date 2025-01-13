function escopo(){
    const divParagrafos = document.querySelector('.paragrafos');
    const paragrafos = divParagrafos.querySelectorAll('p');

    corParagrafo(paragrafos);

    function corParagrafo(p){
        const estilosBody = getComputedStyle(document.body);
        const backgroundColorBody = estilosBody.backgroundColor;

        for(let i of p){
            i.style.backgroundColor = backgroundColorBody;
            i.style.color = '#ffffff';
        }
        
    }
}
escopo();