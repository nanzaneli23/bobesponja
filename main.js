document.addEventListener("click", showcolor);

document.getElementById("botao").addEventListener("click", exibenome);

function showcolor()
{
    document.body.style.backgroundColor ="red";
}

function exibenome()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é:" + usuario;
    document.getElementById("nome").value ="";
}

document.getElementById("btn-soma").addEventListener("click", somar);

function somar()
{
    let conta = document.getElementById("num1").value;
    document.getElementById("num2").innerHTML = "Soma:" + somar;
    document.getElementById("resultado1").value ="";
}


