/**
 * Conversor Fahrenheit para Celsius
 * @author Leandro Augusto e Matheus Motta
 */
function calcular() {
    let f, c

    f = parseFloat(frmConversor.fahrenheit.value)

    c = (f-32)*(5/9)

    frmConversor.celsius.value = c.toFixed(2)
}