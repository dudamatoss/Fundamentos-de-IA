const FUTEBOL = 0;
const AUTOMOBILISMO = 1;

let treinamento = [
    {
        entrada1: 0,
        entrada2: 0,
        resultadoEsperado: FUTEBOL
    },
    {
        entrada1: 0,
        entrada2: 1,
        resultadoEsperado: FUTEBOL
    },
    {
        entrada1: 1,
        entrada2: 0,
        resultadoEsperado: AUTOMOBILISMO
    },
    {
        entrada1: 1,
        entrada2: 1,
        resultadoEsperado: AUTOMOBILISMO
    },
]

let w1 = 1, w2 = 0

let sum, resultadoObtido, ajustes, ajustesTotais = 0

function soma(entrada1, entrada2) {
    return (entrada1 * w1 ) + (entrada2 * w2);
}


function transferencia (resultadoSoma) {
    if (resultadoSoma < 0) {
        return 0
    }else if (resultadoSoma >= 0 && resultadoSoma <= 1) {
        return resultadoSoma;
    }
    return 1;
}

function ajuste(entrada1, entrada2, resultadoDesejado, resultadoObtido) {
    w1 = w1 + 1 * (resultadoDesejado - resultadoObtido) * entrada1
    w2 = w2 + 1 * (resultadoDesejado - resultadoObtido) * entrada2
}

do {
    ajustes = 0;

    treinamento.forEach(valor => {
        sum = soma(valor.entrada1, valor.entrada2)
        resultadoObtido = transferencia(sum)
        if (resultadoObtido != valor.resultadoEsperado) {
            ajuste(valor.entrada1, valor.entrada2, valor.resultadoEsperado, resultadoObtido)
            ajustes++;
            ajustesTotais++;
        }
    });

} while (ajustes != 0)

console.log("Os pesos finais ficaram w1: " + w1 + " e w2: " + w2);
console.log("a quantidade de ajustes foi: " + ajustesTotais);



console.log(treinamento);

