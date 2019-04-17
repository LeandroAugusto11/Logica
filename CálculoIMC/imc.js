/**
 * Calcular IMC
 * @author Leandro Augusto
 */
function calcularImc() {
    let peso, altura, imc

    peso = parseFloat(frmImc.txtpeso.value.replace(",", "."))
    altura = parseFloat(frmImc.txtaltura.value.replace(",", "."))
    imc = peso / (altura * altura)

    frmImc.txtIMC.value = imc.toFixed(2)
    if (imc < 17) {
        document.getElementById("Imc").src = "imc1.png"
    } else if (imc >= 17 && imc <= 18.49) {
        document.getElementById("Imc").src = "imc2.png"
    } else if (imc >= 18, 50 && imc <= 24.99) {
        document.getElementById("Imc").src = "imc3.png"
    } else if (imc >= 25 && imc <= 29.99) {
        document.getElementById("Imc").src = "imc4.png"
    } else if (imc >= 30 && imc <= 34.99) {
        document.getElementById("Imc").src = "imc5.png"
    } else if (imc >= 35 && imc <= 39.99) {
        document.getElementById("Imc").src = "imc6.png"
    } else {
        document.getElementById("Imc").src = "imc7.png"
    }
}

