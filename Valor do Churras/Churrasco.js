/ **
 * Calcular Valor Churrasco
* @author  Leandro Augusto 
 * /
function calcular() {
    let homem, mulher, crianca, kgCarne, valorCarne, latas, VlLata, refri, prRefri

    homem = parseFloat(frmChurrasco.txtHomem.value.replace(',', '.'))
    mulher = parseFloat(frmChurrasco.txtMulher.value.replace(',', '.'))
    crianca = parseFloat(frmChurrasco.txtCrianca.value.replace(',', '.'))

    kgCarne = parseFloat(frmChurrasco.txtCarne.value.replace(',', '.'))
    valorCarne = parseFloat(frmChurrasco.txtPreço.value.replace(',', '.'))

    latas = parseFloat(frmChurrasco.txtLitros.value.replace(',', '.'))
    VlLata = parseFloat(frmChurrasco.txtLatas.value.replace(',', '.'))

    refri = parseFloat(frmChurrasco.txtRefri.value.replace(',', '.'))
    prRefri = parseFloat(frmChurrasco.vlRefri.value.replace(',', '.'))


    kgCarne = (homem * 300) + (mulher * 300) + (crianca * 100)
    valorCarne = ((kgCarne * 35.00)/ 100)

    latas = (homem * 12) + (mulher * 4) 
    VlLata = (latas * 4.00) 

    refri = mulher * 2 + crianca * 2
    prRefri = refri * 3.00


    frmChurrasco.txtCarne.value = kgCarne.toFixed(4)
    frmChurrasco.txtPreço.value = valorCarne.toFixed(4)

    frmChurrasco.txtLatas.value = VlLata.toFixed(4)
    frmChurrasco.txtLitros.value = latas.toFixed(4)

    frmChurrasco.txtRefri.value = refri.toFixed(4)
    frmChurrasco.vlRefri.value = prRefri.toFixed(4)
}
