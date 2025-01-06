function escopo(){
    const form = document.querySelector('form');

    function calculoIMC(evento){
        evento.preventDefault(); //Não enviar o formulário
        
        const peso = document.querySelector('#peso');
        const altura = document.querySelector('#altura');
        const alerta = document.querySelector('#alerta');
        const resultado = document.querySelector('#resultado');

        alerta.style.display = 'none';
        resultado.style.display = 'none';
        

        if(peso.value > 400 || peso.value<=10){
            alerta.innerHTML = `<p>Peso inválido!</p>`;
            alerta.style.display = 'block';
            return;
        }else if(isNaN(altura.value) == true || Number(altura.value) > 2.2 || Number(altura.value) <= 1){
            alerta.innerHTML = `<p>Altura inválida!</p>`;
            alerta.style.display = 'block';
            return;
        }else{
            const imc = peso.value / Number(altura.value)**2;
            resultado.style.display = 'block';
    
            if(imc < 18.5){
                resultado.innerHTML = `<p>Abaixo do peso</p>`;
                resultado.style.backgroundColor = 'var(--underweight)';
            }else if (imc < 25){
                resultado.innerHTML = `<p>Peso normal</p>`;
                resultado.style.backgroundColor = 'var(--normal-weight)';
            }else if (imc < 30){
                resultado.innerHTML = `<p>Sobrepeso</p>`;
                resultado.style.backgroundColor = 'var(--overweigh)';
            }else if (imc < 35){
                resultado.innerHTML = `<p>Obesidade grau 1</p>`;
                resultado.style.backgroundColor = 'var(--obesity-1)';
            }
            else if (imc < 40){
                resultado.innerHTML = `<p>Obesidade grau 2</p>`;
                resultado.style.backgroundColor = 'var(--obesity-2)';
            }else{
                resultado.innerHTML = `<p>Obesidade grau 3</p>`;
                resultado.style.backgroundColor = 'var(--obesity-3)';
            }
            
            
        }
    }

    form.addEventListener('submit', calculoIMC);
}
escopo();