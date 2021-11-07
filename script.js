function AskingName(){

    var lastName = prompt("Qual é o seu último sobrenome?");
    while(lastName=="")
            {
                lastName = prompt("Por gentileza, preencha seu último sobrenome.");
            }
    
    var quantidade = lastName.length;
     
    var mensagem = `Olá, ${lastName.toUpperCase()}. Seu sobrenome contém ${quantidade} letras.`;
    
    window.alert(mensagem);    
   
    }