function escopo(){
    const inputTarefa = document.querySelector('#input-tarefa');
    const listaTarefas = document.querySelector('.lista-tarefas');
    
    function criaBotaoApagar(li){
        const botao = document.createElement('button');
        botao.classList.add('button-apagar-tarefa');
        botao.innerText = 'Apagar';
        li.appendChild(botao);
    }
    
    function limpaInput(input){
        input.value = '';
        input.focus(); ///////////ANOTAR QUE ESSE COMANDO DEIXA SELECIONADO (FOCADO) O ITEM
    }
    
    const criaLi = () => document.createElement('li');

    function criaTarefa(textoInput){
        const tarefa = criaLi();
        const texto = document.createTextNode(textoInput);
        tarefa.appendChild(texto);
        listaTarefas.appendChild(tarefa);
        limpaInput(inputTarefa);
        criaBotaoApagar(tarefa);
    }

    inputTarefa.addEventListener('keypress', function(e){  ///////////ANOTAR QUE TEM COMO PEGAR A TECLA PRESSIONADA USANDO EVENTO
        if(e.key === 'Enter'){
            if(!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });

    document.addEventListener('click', function(e){
        const elemento = e.target;
        if(elemento.classList.contains('button-add-tarefa')){
            if(!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
        if(elemento.classList.contains('button-apagar-tarefa')){

        }
    });
}
escopo();