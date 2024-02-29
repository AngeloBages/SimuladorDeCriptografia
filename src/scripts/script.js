
let inputEntrada = document.querySelector("#inputEntrada");
let inputSaida;
let outputExiste = false;

function criptografar(){

    let valorInputEntrada = inputEntrada.value;

    if(valorInputEntrada != ""){

        gerarInputSaida();
        
        inputSaida.value = "";
        inputSaida.value = valorInputEntrada.replace(/e/g, "enter").replace(/i/g, "imes")
        .replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    }
}

function descriptografar(){

    if(outputExiste){

        let valorInputSaida = inputSaida.value;

        if(valorInputSaida != ""){

            inputEntrada.value = valorInputSaida.replace(/enter/g, "e").replace(/imes/g, "i")
            .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        }
    }
}

function gerarInputSaida(){

    if(!outputExiste){

        document.querySelector(".container__conteudoPrincipal__output__bloco-temporario").remove();
        outputExiste = true;

        inputSaida = document.createElement("textarea");
        inputSaida.className = "container__conteudoPrincipal__output__bloco-saida";
        inputSaida.setAttribute("placeholder", "Digite para descriptografar");

        let botaoCopiar = document.createElement("button");
        botaoCopiar.className = "container__conteudoPrincipal__output__bloco-botaoCopiar";
        botaoCopiar.innerHTML = "Copiar";
        botaoCopiar.addEventListener("click", () => {
            inputSaida.select();
            document.execCommand("copy");
        });

        document.querySelector(".container__conteudoPrincipal__output__bloco").appendChild(inputSaida);
        document.querySelector(".container__conteudoPrincipal__output__bloco").appendChild(botaoCopiar);
    }   
}
