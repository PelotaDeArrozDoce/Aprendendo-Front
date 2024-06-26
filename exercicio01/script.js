function soma(){
    var n1 = document.getElementById("soma1").valueAsNumber
    var n2 = document.getElementById("soma2").valueAsNumber
    var resposta = document.getElementById("respSoma")
    resposta.textContent = n1 + n2;
}

function sub(){
    var n1 = parseInt(document.getElementById("sub1").value)
    var n2 = parseInt(document.getElementById("sub2").value)
    var resposta = document.getElementById("respSub")
    resposta.textContent = n1 - n2
}

function div(){
    var n1 = parseInt(document.getElementById("div1").value)
    var n2 = parseInt(document.getElementById("div2").value)
    var resposta = document.getElementById("respDiv")
    resposta.textContent = n1 / n2
}

function multi(){
    var n1 = parseInt(document.getElementById("multi1").value)
    var n2 = parseInt(document.getElementById("multi2").value)
    var resposta = document.getElementById("respMulti")
    resposta.textContent = n1 * n2
}

function media(){
    var n1 = parseInt(document.getElementById("m1").value)
    var n2 = parseInt(document.getElementById("m2").value)
    var n3 = parseInt(document.getElementById("m3").value)
    var media = document.getElementById("respMedia")
    var res = (n1 + n2 + n3) / 3;

    if (res >= 7){
        media.textContent = res;
        media.style.color = "green"

    } else {
        media.textContent = res
        media.style.color = "red"

    }
}
function contar(){
    const num = parseInt($("#numeroInput").val())
    var resultadoStr = ""

    if(num <= 1000){
        for(var cont = 1; cont <= num; cont++){
            resultadoStr =  resultadoStr + cont + "<br>"
        }
        $("#result").html(resultadoStr)
    }else{
        $("result").text("Digite um Numero menor que 1000")
    }


}