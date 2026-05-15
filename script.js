function executarSistema(){
    const nome = document.getElementById("inputNome").value;
    const idade = parseInt(document.getElementById("inputIdade").value);
    const valor = parseFloat(document.getElementById("inputValor").value);
    const cupom = document.getElementById("inputCupom").value == "true";

    //DADOS DE SAIDA
    const msg = document.getElementById("mensagem-autorizacao");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");


    //VALIDAÇÃO PARA CAMPOS VAZIOS
    if(!nome || isNaN(idade) || isNaN(valor)){
        alert("Por favor, preencha todos os campos!");
        return;
    }

    //REGRA DE NEGÓCIO
    if(idade >= 16){
        msg.innerText = `Venda autorizada: ${nome}`;
        msg.style.color = "#00ff88";

        //DESCONTO
        let valorFinal = (valor > 500 || cupom) ? valor * 0.85 : valor;

        //ESTOQUE
        let estoque = ["Placa de Video", "Processador", "Memoria RAM"];
        lista.innerHTML = ""; // LIMPA A LISTA ANTERIOR
    }
}