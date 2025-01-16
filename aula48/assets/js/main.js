function escopo(){
    const inputTarefa = document.querySelector('#input-tarefa');
    const listaTarefas = document.querySelector('.lista-tarefas');
    
    
    function salvarTarefas(){
        const liTarefas = listaTarefas.querySelectorAll('li');
        const textoTarefas = [];
        
        for(let tarefa of liTarefas){
            let text = tarefa.innerText;
            text = text.replace('Apagar', '').trim();
            textoTarefas.push(text);
        }
        const tarefasJSON = JSON.stringify(textoTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }
    
    function criaBotaoApagar(li){
        const botao = document.createElement('button');
        li.innerText += ' ';
        botao.setAttribute('class', 'button-apagar-tarefa'); ///////////ANOTAR QUE ESSA FUNÇÃO SETA UMA ATRIBUTO, PODE SER REF NO <A>, POR EXEMPLO
        botao.setAttribute('title', 'Irá apagar essa tarefa');
        botao.innerText = 'Apagar';
        li.appendChild(botao);
    }
    
    function limpaInput(input){
        input.value = '';
        input.focus(); ///////////ANOTAR QUE ESSA FUNÇÃO DEIXA SELECIONADO (FOCADO) O ITEM
    }
    
    const criaLi = () => document.createElement('li');
    
    function criaTarefa(textoInput){
        const tarefa = criaLi();
        const texto = document.createTextNode(textoInput);
        tarefa.appendChild(texto);
        listaTarefas.appendChild(tarefa);
        limpaInput(inputTarefa);
        criaBotaoApagar(tarefa);
        salvarTarefas();
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
            elemento.parentElement.remove();
            salvarTarefas();
        }
    });
    
    function recuperaTarefas(){
        const tarefas = localStorage.getItem('tarefas');
        const textoTarefas = JSON.parse(tarefas);
    
        for(let tarefa of textoTarefas){
            criaTarefa(tarefa);
        }
    }
    recuperaTarefas();
}
escopo();