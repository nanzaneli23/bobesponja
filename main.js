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

document.getElementById("btn-soma").addEventListener("click", exiberesultado);

function exiberesultado()
{
    let num1 = document.getElementById("num1").value;
    let num1 = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML = num1 + num2
    document.getElementById("resultado1").value ="";
}


