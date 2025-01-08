function escopo(){
    /*
    const data = new Date();

    function nomeDiaSemana(numDia){
        switch (numDia){
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-feira';
            case 2:
                return 'Terça-feira';
            case 3:
                return 'Quarta-feira';
            case 4:
                return 'Quinta-feira';
            case 5:
                return 'Sexta-feira';
            case 6:
                return 'Sábado';
            default:
                return '';
        }
    }
    
    function nomeMes(numMes){
        switch (numMes){
            case 0:
                return 'Janeiro';
            case 1:
                return 'Fevereiro';
            case 2:
                return 'Março';
            case 3:
                return 'Abril';
            case 4:
                return 'Maio';
            case 5:
                return 'Junho';
            case 6:
                return 'Julho';
            case 7:
                return 'Agosto';
            case 8:
                return 'Setembro';
            case 9:
                return 'Outubro';
            case 10:
                return 'Novembro';
            case 11:
                return 'Dezembro';
            default:
                return '';
        }
    }

    function zeroEsquerda(num){
        return num < 10 ? `0${num}` : num;
    }
    
    function criaData(data){
        const arrayData =  [data.getDay(), data.getDate(), data.getMonth(), data.getFullYear(), data.getHours(), data.getMinutes()];
        //                  0 - dia semana 1 - dia         2 - mes          3 - ano             4 - hora         5 - minuto
        return arrayData;
    }

    function formatData(data){
        //        0 - dia semana                       1 - dia                 2 - mes                          3 - ano              4 - hora                           5 - minuto
        return `${nomeDiaSemana(criaData(data)[0])}, ${criaData(data)[1]} de ${nomeMes(criaData(data)[2])} de ${criaData(data)[3]} ${zeroEsquerda(criaData(data)[4])}:${zeroEsquerda(criaData(data)[5])}`;
    }

    function printData(data){
        const tittle = document.querySelector('.container h1');
        tittle.innerHTML = formatData(data);
    }

    printData(data);
    */

    const data = new Date();
    const h1 = document.querySelector('.container h1');
    h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
    console.log(data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' }));
}
escopo();