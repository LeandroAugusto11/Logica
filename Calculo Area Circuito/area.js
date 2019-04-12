/**
 * Cálculo da Área do Circulo
 * @author Leandro Augusto e Matheus Motta
 */
function calcularCirculo() {
    let raio, area 

    raio = parseFloat(frmCirculo.txtRaio.value.replace(",","."))

    area = (raio * raio) * 3.14159

    frmCirculo.txtArea.value = area.toFixed(2)

}