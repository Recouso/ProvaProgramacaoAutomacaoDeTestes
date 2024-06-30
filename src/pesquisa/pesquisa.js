const pesquisarCampo = (arrayInformacao, stringCampo) => {
    if (!arrayInformacao) {
        return "Informe a lista de campos";
    }
    if (arrayInformacao == '') {
        return "Informe a lista de campos";
    }
    if (!stringCampo) {
        return "Informe a pesquisa";
    }

    let contador = 0;
    let indexDoIdentificador = 0;
    for (let index = 0; index < arrayInformacao.length; index++) {
        if (stringCampo == arrayInformacao[index].identificador) {
            indexDoIdentificador = index;
            contador++;
        }
    }
    if (contador == 1) {
        return arrayInformacao[indexDoIdentificador].texto;
    } else if (contador > 1) {
        let concatenar = "";
        for (let index = 0; index < arrayInformacao.length; index++) {
            if (stringCampo == arrayInformacao[index].identificador) {
                concatenar = concatenar + arrayInformacao[index].texto + ",";
            }

        }
        return concatenar = concatenar.substring(0, concatenar.length - 1);
    }
    return "Nenhum campo encontrado";



}

module.exports = {
    pesquisarCampo
}