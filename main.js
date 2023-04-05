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
document.getElementById("btn-dividir").addEventListener("click", exiberesultado1);
document.getElementById("btn-multiplicar").addEventListener("click", exiberesultado2);
document.getElementById("btn-subtrair").addEventListener("click", exiberesultado3);


function exiberesultado()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML = num1 + num2
    document.getElementById("resultado1").value ="";
}


function exiberesultado1()
{
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    document.getElementById("resultado2").innerHTML = num3 / num4
    document.getElementById("resultado2").value ="";
}

function exiberesultado2()
{
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    document.getElementById("resultado3").innerHTML = num5*num6
    document.getElementById("resultado3").value ="";
}

function exiberesultado3()
{
    let num7 = document.getElementById("num7").value;
    let num8 = document.getElementById("num8").value;
    document.getElementById("resultado4").innerHTML = num7-num8
    document.getElementById("resultado4").value ="";
}



