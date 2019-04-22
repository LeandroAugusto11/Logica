/**
 * @author Leandro Augusto
 */

function jogar() {
    if (document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false) {
        alert("Selecionar um opção");
    } else {
        var sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0:
                document.getElementById("pc").src = "pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "pcpapel.png";
                break;
            case 3:
                document.getElementById("pc").src = "pctesoura.png";
                break;
        }
        if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true && sorteio == 2)) {
            document.getElementById("placar").innerHTML = "Empate"
        } else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura").checked == true && sorteio == 1)){
            document.getElementById("placar").innerHTML = "Você Venceu"
        } else{
            document.getElementById("placar").innerHTML = "O Computador Venceu"
        }
    }


}
function limpar() {
    document.getElementById("pc").src = "pc.png";
    document.getElementById("placar").innerHTML = "";
}
function jogar() {
    if (document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false) {
        alert("Selecionar um opçãoo");
    } else {
        var sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0:
                document.getElementById("pc").src = "pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "pcpapel.png";
                break;
            case 3:
                document.getElementById("pc").src = "pctesoura.png";
                break;
        }
        if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true && sorteio == 2)) {
            document.getElementById("placar").innerHTML = "Empate"
        } else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura").checked == true && sorteio == 1)){
            document.getElementById("placar").innerHTML = "Você Venceu"
        } else{
            document.getElementById("placar").innerHTML = "O Computador Venceu"
        }
    }


}
function limpar() {
    document.getElementById("pc").src = "pc.png";
    document.getElementById("placar").innerHTML = "";
}