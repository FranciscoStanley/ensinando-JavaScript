function calculadora(){
    const operacao = Number(prompt('escolha uma operação:\n 1 - Adição (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if(!operacao || operacao >= 7){
        alert('Erro -- essa operação é inválida!');
        calculadora();
    }else{

        let n1 = Number(prompt('Insira o primeiro número:'));
        let n2 = Number(prompt('Insira o segundo número:'));
        let resultado;

        if(!n1 || !n2){
            alert('Erro - operação inválida, escolha um valor válido!');
            calculadora();s
        }else{
            function adicao() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} x ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª = ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação ?\n 1 - Sim\n 2 - Não');
    
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2){
                    alert('Até a próxima!');
                }else{
                    alert('Digite uma opção valida!');
                    novaOperacao();
                }
            }
        }

        switch(operacao){
            case 1:
                adicao();
                break;
            case 2:
                subtracao();
                break;    
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }   

    }
}
  

calculadora();