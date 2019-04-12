/**
 * Calcular Dolar
 * @author Leandro Augusto
 */

function calcularConversao(){
    let dolar, real, Dinheiro
    
    Dinheiro = parseFloat(frmDolarReal.txtDinheiro.value.replace(",","."))
    dolar = parseFloat(frmDolarReal.txtDolar.value.replace(",","."))

    real = Dinheiro * dolar

    frmDolarReal.txtReal.value = real.toFixed(2)

}