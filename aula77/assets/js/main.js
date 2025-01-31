///517.146.488-00 067.562.948-90
/*
5x  1x 7x 1x 4x 6x 4x 8x 8x
10  9  8  7  6  5  4  3  2
50  9  56 7  24 30 16 24 16 = 232

11 - (232 % 11) = 10 = 0 (Primeiro Dígito)
Se o dígito for maior que 9, consideramos 0

5x  1x  7x 1x 4x 6x 4x 8x 8x 0x
11  10  9  8  7  6  5  4  3  2
55  10  63 8  28 36 20 32 24 0 = 276

11 - (276 % 11) = 10 = 0 (Segundo Dígito)
Se o dígito for maior que 9, consideramos 0
*/
(function() {
    const cpf = document.querySelector('#input-cpf');
    
    document.addEventListener('click', e =>{
        const event = e.target;
        if(event.classList.contains('btn-valida')){
            //valida();
        }
    });
})();