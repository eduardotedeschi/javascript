(function(){

    function Calculadora(){

        const calculadora = document.querySelector('.calculadora');
        const display = document.querySelector('.display');

        this.iniciar = function() {
            clicaBotao();
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

        const clicaBotao = function() {
            calculadora.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    mostrarDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    limpaDisplay();
                }

                if(el.classList.contains('btn-del')){
                    deletarChar();
                }
            });
        };
    }

    const calculadora1 = new Calculadora();
    calculadora1.iniciar();

})();