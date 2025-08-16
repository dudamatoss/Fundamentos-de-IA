function limiteRapido(soma) {
    if (soma <= 0) {
        return -1;
    }
    return 1;
}

function rampa(soma) {
    if (soma < 0) {
        return 0;
    }
    if (soma >= 0 && soma <= 1) {
        return soma;
    }
    if (soma > 1) {
        return 1;
    }
}

function sigmoide(soma) {
    if (soma >= 0) {
        return 1-(1/(1+soma));
    }
    return -1+(1/(1-soma));
}

function soma (entrada1, pesoNeuronio1) {
    return (entrada1 * pesoNeuronio1);
}

// calculo pro primeiro neuronio

pesoNeuronio1 =1;
pesoNeuronio2 = -2;

entrada1 = 0;


resultadoSoma = soma(entrada1, pesoNeuronio1);
saida1 = limiteRapido(resultadoSoma);
saida2 = rampa(resultadoSoma);
saida3 = sigmoide(resultadoSoma);

console.log("LR - Primeiro Neuronio - " + saida1);
console.log("FR - Primeiro Neuronio - " + saida2);
console.log("SG - Primeiro Neuronio - " + saida3);


// calculo pro segundo neuronio

entradaLimiteRapido = saida1;
entradaFuncaoRampa = saida2
entradaSigmoide = saida3;



resultadoSomaLimiteRapido = soma(entradaLimiteRapido, pesoNeuronio2);
resultadoSomaFuncaoRampa = soma(entradaFuncaoRampa, pesoNeuronio2);
resultadoSomaSigmoide = soma(entradaSigmoide, pesoNeuronio2);


resultadoLimiteRapido = limiteRapido(resultadoSomaLimiteRapido);
resultadoFuncaoRampa  = limiteRapido(resultadoSomaFuncaoRampa);
resultadoSigmoide     = limiteRapido(resultadoSomaSigmoide);



console.log("\n\n\n")
console.log("LR - Primeiro Neuronio - " + resultadoLimiteRapido);
console.log("FR - Primeiro Neuronio - " + resultadoFuncaoRampa);
console.log("SG - Primeiro Neuronio - " + resultadoSigmoide);