const INFORMATICA = 0;
const BIOLOGIA  = 1;

const enumLabels = {
    [INFORMATICA] :  "informatica",
    [BIOLOGIA] : "Biologia "}
    


let treinamento = [
     {
        entrada1: 1,
        entrada2: 0,
        entrada3:0,
        resultadoEsperado: INFORMATICA
    },
     {
        entrada1: 1,
        entrada2: 0,
        entrada3:1,
        resultadoEsperado: INFORMATICA
    },
     {
        entrada1: 1,
        entrada2: 1,
        entrada3:0,
        resultadoEsperado: BIOLOGIA
    },
     {
        entrada1: 1,
        entrada2: 1,
        entrada3:1,
        resultadoEsperado: BIOLOGIA
    },
]

let w1 = 0, w2 = 0, w3 =0

let sum, resultadoObtido, ajustes, ajustesNecessarios = 0

function soma(entrada1, entrada2, entrada3) {
    return (entrada1 * w1 ) + (entrada2 * w2) + (entrada3 * w3);
}

function transferencia (resultadoSoma) {
    if (resultadoSoma < 0) {
        return 0
    }else if (resultadoSoma >= 0 && resultadoSoma <= 1) {
        return resultadoSoma;
    }
    return 1;
}

function ajuste(entrada1, entrada2, entrada3, resultadoDesejado, resultadoObtido) {
    w1 = w1 + 1 * (resultadoDesejado - resultadoObtido) * entrada1
    w2 = w2 + 1 * (resultadoDesejado - resultadoObtido) * entrada2
    w3 = w3 + 1 * (resultadoDesejado - resultadoObtido) * entrada3

}

do {
    ajustes = 0;

    treinamento.forEach(valor => {
        sum = soma(valor.entrada1, valor.entrada2, valor.entrada3)
        resultadoObtido = transferencia(sum)
        if (resultadoObtido != valor.resultadoEsperado) {
            ajuste(valor.entrada1, valor.entrada2,valor.entrada3, valor.resultadoEsperado, resultadoObtido)
            ajustes++;
            ajustesNecessarios++;
        }
    });

} while (ajustes != 0)

async function lerEntrada(mensagem) {
    process.stdout.write(mensagem);
    let buffer = "";
    const stdin = process.stdin;
    stdin.resume();
    stdin.setEncoding('utf8');
    
    return new Promise((resolve) => {
        stdin.on('data', function(data) {
            buffer += data;
            stdin.pause();
            resolve(buffer.trim());
        });
    });
}


let resposta = await lerEntrada("Informa a entrada desjada. Exemplo: 1,0,1: ");
let entrada = resposta.split(",");

if(entrada.length !== 3){
    console.log("Voce deve digitar 3 numeros, eles devem ser 0 ou 1.")
    process.exit();
}

sum = soma(entrada[0], entrada[1], entrada[2]);

resultadoObtido = transferencia(sum);

console.log("\n RESULTADO");
console.log("\n Entradas: " + entrada.join(","));
console.log("\n Categoria Detctada: " + enumLabels[resultadoObtido]);