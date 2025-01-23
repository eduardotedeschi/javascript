(function(){

    function Calculadora(){

        const calculadora = document.querySelector('.calculadora');
        const display = document.querySelector('.display');

        this.iniciar = function() {
            clicaBotao();
            pressionaEnter();
            display.focus();
        };

        const mostrarDisplay = function(valor) {
            display.value += valor;
        };

        const limpaDisplay = function() {
            display.value = '';
        };

        const deletarChar = function() {
            display.value = display.value.slice(0, -1);
        };

        const calcular = function() {
            try {
                let conta = display.value;
                conta = eval(conta);
                if(!conta){
                    alert('Erro na conta!');
                    display.value = '';
                }
                display.value = conta;
            } catch (error) {
                const err = error;
                alert('Erro na conta!');
                display.value = '';
            }
        };

        const clicaBotao = function() {
            calculadora.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    mostrarDisplay(el.innerText);
                    display.focus();
                }

                if(el.classList.contains('btn-clear')){
                    limpaDisplay();
                    display.focus();
                }

                if(el.classList.contains('btn-del')){
                    deletarChar();
                    display.focus();
                }

                if(el.classList.contains('btn-eq')){
                    calcular();
                    display.focus();
                }
            });
        };

        const pressionaEnter = function() {
            document.addEventListener('keyup', e => {
                if(e.key === 'Enter'){
                    calcular();
                    display.focus();
                }
            });
        }
    }

    const calculadora1 = new Calculadora();
    calculadora1.iniciar();

})();