function calculadora(){
    const operacao = Number(prompt('Entre com uma escolha! \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - divisão Real (/) \n 5 - resto da divisão (%) \n 6 - Potenciação (**)' ));
    
    
    
    if(!operacao || operacao >=7){
        alert("Entre com um valor válido!");
        calculadora();
    }else{
        let n1 = Number(prompt("Entre com o primeiro valor!"));
        let n2 = Number(prompt("Entre com o segundo valor!"));
        let result;
        if(!n1 || !n2){
            alert('Entre com um valor válido!');
            calculadora();
        }else{

            function subracao(){
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`);
            }
            function multiplicacao(){
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`);
            }
            function soma(){
                result = n1+n2;
                alert(`${n1} + ${n2} = ${result}`);
            }
            function divisaoReal(){
                result = n1/ n2;
                alert(`${n1} / ${n2} = ${result}`);
            }
            function divisaoInteira(){
                result = n1 % n2;
                alert(`O resto da divisão entre o número ${n1} e ${n2} é igual a  ${result}`);
            }
            function potenciacao(){
                result = n1**n2;
                alert(`${n1} elevado a ${n2}  é igual a ${result}`);
            }

        if(operacao == 1){
            soma();
            novaOperacao();
        }else if(operacao == 2){
            subracao();
            novaOperacao();
        }else if(operacao == 3){
            multiplicacao();
            novaOperacao();
        }else if(operacao == 4){
            divisaoReal();
            novaOperacao();
        }else if(operacao == 5){
            divisaoInteira();
            novaOperacao();
        }else{
            potenciacao();
            novaOperacao();
        }
    
        function novaOperacao(){
            let opcao = prompt("Deseja continuar com a operação? \n Digite (1) para continuar \n Digite (2) para sair do sistema!");
    
            if(opcao == 1){
    
                calculadora();
            }else if(opcao == 2){
                alert("Até mais");
            }else{
                alert( "Digite uma opção valida!");
                novaOperacao();
    
            }
        }
       
          
       }
    }
   
    }
    calculadora();

