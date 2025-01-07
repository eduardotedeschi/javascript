function escopo(){
    const form = document.querySelector('form');
    const alerta = document.querySelector('#alerta');
    const resultado = document.querySelector('#resultado');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); //Não enviar o formulário 
        alerta.style.display = 'none';
        alerta.innerHTML = '';
        resultado.style.display = 'none';
        resultado.innerHTML ='';
        const peso = e.target.querySelector('#peso');
        const altura = e.target.querySelector('#altura');
        validaInput(peso, altura);
    });     
    
    function criaP(className, text){
        const p = document.createElement('p');
        if(className.trim()===''){
            p.innerHTML = text;
            return p;
        }else{
            p.classList.add(className);
            p.innerHTML = text;
            return p; 
        }
    }

    function validaInput(peso, altura){
        if(peso.value > 400 || peso.value<=10){
            const p = criaP('', 'Peso inválido!');
            alerta.appendChild(p);
            alerta.style.display = 'block';
            return;
        }else if(!altura.value || Number(altura.value) > 2.2 || Number(altura.value) <= 1){
            const p = criaP('', 'Altura inválida!');
            alerta.appendChild(p);
            alerta.style.display = 'block';
            return;
        }else{
            calculaIMC(peso.value, Number(altura.value));
            return;
        }
    }

    function calculaIMC(peso, altura){
        const imc = peso / altura**2;
        setResultado(msgSelector(imc));
        return;
    }

    function msgSelector(imc){
        if(imc < 18.5){
            const p = criaP('underweight', `Abaixo do peso`);
            return p;
        }
        if (imc < 25){
            const p = criaP('normal-weight', `Peso normal`);
            return p;
        }
        if (imc < 30){
            const p = criaP('overweigh', `Sobrepeso`);
            return p;
        }
        if (imc < 35){
            const p = criaP('obesity-1', `Obesidade grau 1`);
            return p;
        }
        if (imc < 40){
            const p = criaP('obesity-2', `Obesidade grau 2`);
            return p;
        }
        
        const p = criaP('obesity-3', `Obesidade grau 3`);
        return p;
        
        
    }
    
    function setResultado(msg){
        resultado.appendChild(msg);
        resultado.style.display = 'block';
        return;
    }

    return;
}
escopo();