function escopo(){
    const container = document.querySelector('.container');

    const elementos =[
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'section', texto: 'Frase 3'},
        {tag: 'footer', texto: 'Frase 4'}
    ];

    addElementos(elementos);

    function addElementos(elementos){
        const div = document.createElement('div');
        for(let i=0; i<elementos.length; i++){
            //div.appendChild(document.createElement(elementos[i].tag)); Poderia fazer assim, fica mais verboso
            //document.querySelector(`.container div ${elementos[i].tag}`).innerHTML = elementos[i].texto;
            let {tag, texto} = elementos[i];
            let elemento = document.createElement(tag);
            let text = document.createTextNode(texto);
            elemento.appendChild(text);
            div.appendChild(elemento);
        }
        container.appendChild(div);
    }
}
escopo();