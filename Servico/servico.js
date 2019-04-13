/**
 * Preço do Serviço
 * @author Leandro Augusto
 */
function calcularServico () {
    let salarioLiquido, custo, carga, Total
   
    salarioLiquido = parseFloat(frmservico.txtSalarioLiquido.value.replace(",", "."))
    carga = parseFloat(frmservico.txtCarga.value.replace(",", "."))
    custo = parseFloat(frmservico.txtCusto.value.replace(",", "."))
    Total = (((salarioLiquido * 30)/100) + ((salarioLiquido * 20)/100) + custo) / carga

    
    
    
    frmservico.txtTotal.value = Total.toFixed(2)
}