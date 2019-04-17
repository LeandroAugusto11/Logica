/**
 * Calcular IMC
 * @author Leandro Augusto
 */
function calcularImc() {
    let peso, altura, imc

    peso = parseFloat(frmImc.txtpeso.value.replace(",","."))
    altura = parseFloat(frmImc.txtaltura.value.replace(",","."))
    imc= peso / (altura * altura)  
    
    frmImc.txtIMC.value = imc.toFixed(2)
    if (imc < 17){
        frmImc.txtStatus.value = "Muito abaixo do peso"
    } else if (imc >= 17 && imc <= 18.49) {
        frmImc.txtStatus.value = "Abaixo do Peso"
    } else if (imc >= 18,50 && imc <= 24.99) {
        frmImc.txtStatus.value = "Peso Normal"
    } else if (imc >= 25 && imc <= 29.99) {
        frmImc.txtStatus.value = "Acima do peso"
    } else if (imc >= 30 && imc <= 34.99) {
        frmImc.txtStatus.value = "Obsidade I"
    } else if (imc >= 35 && imc <= 39.99) {
        frmImc.txtStatus.value = "Obsidade II (Severa)"
    } else {
        frmImc.txtStatus.value = "Obsidade III (Morbida)"
    }
}