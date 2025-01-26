(function(){

    function Calculadora(){

        const calculadora = document.querySelector('.calculadora');
        const display = document.querySelector('.display');

        this.iniciar = () => {
            clicaBotao();
            pressionaEnter();
            display.focus();
        };

        const mostrarDisplay = valor => display.value += valor;

        const limpaDisplay = () => display.value = '';

        const deletarChar = () => display.value = display.value.slice(0, -1);

        const calcular = () => {
            try {
                let conta = display.value;
                conta = eval(conta);
                if(!conta){
                    alert('Erro na conta!');
                    display.value = '';
                    return;
                }
                display.value = conta;
            } catch (error) {
                const err = error;
                alert('Erro na conta!');
                display.value = '';
                return;
            }
        };

        const clicaBotao = () => {
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

        const pressionaEnter = () => {
            document.addEventListener('keyup', e => {
                if(e.key === 'Enter'){
                    calcular();
                    display.focus();
                }
            });
        };
    }

    const calculadora = new Calculadora();
    calculadora.iniciar();

})();