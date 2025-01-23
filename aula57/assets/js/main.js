(function(){
    function criaCalculadora(){
        return {
            display: document.querySelector('.display'),

            inicia(){
                this.cliqueBotoes();
                this.pressionaEnter();
            },

            clearDisplay(){
                this.display.value = '';
            },

            deletarChar(){
                this.display.value = this.display.value.slice(0, -1);
                this.display.focus();
            },

            calculo(){
                let conta = this.display.value;

                try{
                    conta = eval(conta);
                    if(!conta){
                        alert('Conta inválida!');
                        return;
                    }
                    this.display.value = conta;

                }catch(e){
                    alert('Conta inválida!');
                    return;
                }
            },

            cliqueBotoes(){
                //this --> calculadora
                document.addEventListener('click', (e) =>{
                    //this --> document apenas quando é function, quando é arrow function, o this continua o mesmo
                    const el = e.target;
                    if(el.classList.contains('btn-num')){
                        this.bntParaDisplay(el.innerText);
                    }

                    if(el.classList.contains('btn-clear')){
                        this.clearDisplay();
                    }

                    if(el.classList.contains('btn-del')){
                        this.deletarChar();
                    }

                    if(el.classList.contains('btn-eq')){
                        this.calculo();
                    }
                });
            },

            bntParaDisplay(botao){
                this.display.value += botao;
                this.display.focus();
            },

            pressionaEnter(){
                this.display.addEventListener('keyup', (e) => {
                    if (e.key === 'Enter'){
                        this.calculo();
                    }
                });
            }

        };
    };

    const calculadora = criaCalculadora();
    calculadora.inicia();

})();