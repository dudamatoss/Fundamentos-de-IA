let baseDeConhecimento = [
  {
    identificacao: "inicio",
    descricao: "Você gostaria de uma opcao mais saudavel?",
    opcoes: [
      {
        opcao: "sim",
        redireciona: "animais-aquaticos",
        confianca: true,
        justificativa: "O usuário busca uma opção mais saudável",
      },
      {
        opcao: "não",
        redireciona: "massas",
        confianca: true,
        justificativa: "O usuário está aberto a sugestões não tão saudáveis",
      },
      {
        opcao: "Não sei",
        redireciona: "massas",
        confianca: false,
        justificativa: "O usuário está indeciso sobre se gostaria de uma opção saudável",
      },
    ],
  },
  {
    identificacao: "animais-aquaticos",
    descricao: "Você gostaria de opções com animais aquáticos (Peixes, Camarões, Lula etc)",
    opcoes: [
      {
        opcao: "sim",
        redireciona: "peixes",
        confianca: true,
        justificativa: "O usuário prefere opções com animais aquáticos",
      },
      {
        opcao: "não",
        redireciona: "brasileira",
        confianca: true,
        justificativa: "O usuário não deseja opções com animais aquáticos",
      },
      {
        opcao: "Não sei",
        redireciona: "grandes-porcoes",
        confianca: false,
        justificativa: "O usuário está indeciso sobre opções com animais aquáticos",
      },
    ],
  },
  {
    identificacao: "massas",
    descricao: "Você gostaria de opções com massas? (Culinária Italiana)",
    opcoes: [
      {
        opcao: "sim",
        redireciona: "grandes-porcoes",
        confianca: true,
        justificativa: "O usuário deseja opções com massas",
      },
      {
        opcao: "não",
        resposta: "Xis, Cachorro Quente, Batatao, Hamburguer ou pastel",
        confianca: true,
      },
      {
        opcao: "Não sei",
        redireciona: "brasileira",
        confianca: false,
        justificativa: "O usuário está indeciso sobre opções com massas",
      },
    ],
  },
  {
    identificacao: "peixes",
    descricao: "Você gostaria de opções com peixes?",
    opcoes: [
      {
        opcao: "sim",
        redireciona: "havaiana",
        confianca: true,
        justificativa: "O usuário deseja opções com peixes",
      },
      {
        opcao: "não",
        resposta: "Frutos do Mar",
        confianca: true,
      },
      {
        opcao: "Não sei",
        redireciona: "mexicana",
        confianca: false,
        justificativa: "O usuário está indeciso sobre opções com peixes",
      },
    ],
  },
  {
    identificacao: "brasileira",
    descricao: "Você gostaria de uma opção da culinária brasileira?",
    opcoes: [
      {
        opcao: "sim",
        resposta: "Comida Brasileira",
        confianca: true,
      },
      {
        opcao: "não",
        redireciona: "mexicana",
        confianca: true,
        justificativa: "O usuário não deseja culinária brasileira",
      },
      {
        opcao: "Não sei",
        redireciona: "pizza",
        confianca: false,
        justificativa: "O usuário está indeciso sobre culinária brasileira",
      },
    ],
  },
  {
    identificacao: "grandes-porcoes",
    descricao: "Você gostaria de uma opção com Grandes porções?",
    opcoes: [
      {
        opcao: "sim",
        redireciona: "pizza",
        confianca: true,
        justificativa: "O usuário deseja opções com grandes porções",
      },
      {
        opcao: "não",
        redireciona: "calzone",
        confianca: true,
        justificativa: "O usuário não deseja opções com grandes porções",
      },
      {
        opcao: "Não sei",
        redireciona: "mexicana",
        confianca: false,
        justificativa: "O usuário está indeciso sobre opções com grandes porções",
      },
    ],
  },
  {
    identificacao: "havaiana",
    descricao: "Gostaria da culinária Havaiana?",
    opcoes: [
      {
        opcao: "sim",
        resposta: "poke",
        confianca: true,
      },
      {
        opcao: "não",
        redireciona: "japonesa",
        confianca: true,
        justificativa: "O usuário não deseja culinária havaiana",
      },
    ],
  },
  {
    identificacao: "mexicana",
    descricao: "Gostaria de uma opção de comida mexicana?",
    opcoes: [
      {
        opcao: "sim",
        resposta: "Burrito",
        confianca: true,
      },
      {
        opcao: "não",
        resposta: "Kebab",
        confianca: true,
      },
    ],
  },
  {
    identificacao: "pizza",
    descricao: "Gostaria de uma pizza?",
    opcoes: [
      {
        opcao: "sim",
        resposta: "Pizza",
        confianca: true,
      },
      {
        opcao: "não",
        resposta: "Lasanha",
        confianca: true,
      },
    ],
  },
  {
    identificacao: "calzone",
    descricao: "Gostaria de um Calzone?",
    opcoes: [
      {
        opcao: "sim",
        resposta: "Calzone",
        confianca: true,
      },
      {
        opcao: "não",
        resposta: "Massa",
        confianca: true,
      },
    ],
  },
  {
    identificacao: "japonesa",
    descricao: "E da culinária japonesa?",
    opcoes: [
      {
        opcao: "sim",
        resposta: "Sushi",
        confianca: true,
      },
      {
        opcao: "não",
        resposta: "Pratos com Peixes",
        confianca: true,
      },
    ],
  },
];

function selecionaPergunta(identificadorPergunta) {
  for (let index = 0; index < baseDeConhecimento.length; index++) {
    const element = baseDeConhecimento[index];
    if (element.identificacao == identificadorPergunta) {
      return element;
    }
  }
}

async function lerEntrada(mensagem) {
  process.stdout.write(mensagem);
  let buffer = "";
  const stdin = process.stdin;
  stdin.resume();
  stdin.setEncoding("utf8");

  return new Promise((resolve) => {
    stdin.on("data", function (data) {
      buffer += data;
      stdin.pause();
      resolve(buffer.trim());
    });
  });
}


let pergunta = selecionaPergunta("inicio");

let respostaFinal = null;
let explicacao = [];
let confianca = 100;
let qtdIndecisoes = 0;

(async () => {
  while (respostaFinal == null) {
    console.log(pergunta.descricao);
    pergunta.opcoes.forEach((possivelResposta) => {
      console.log(possivelResposta.opcao);
    });
    let resposta = await lerEntrada("-> ");

    let respostasPossiveis = pergunta.opcoes;
    for (let index = 0; index < respostasPossiveis.length; index++) {
      let respostaPossivelAtual = respostasPossiveis[index];
      if (resposta == respostaPossivelAtual.opcao) {
        if (!("resposta" in respostaPossivelAtual)) {
          if (!respostaPossivelAtual.confianca) {
            qtdIndecisoes++;
          }
          confianca = confianca - (qtdIndecisoes * (10));
        }

        if ("justificativa" in respostaPossivelAtual) {
          explicacao.push(respostaPossivelAtual.justificativa);
        }

        if ("redireciona" in respostaPossivelAtual) {
          pergunta = selecionaPergunta(respostaPossivelAtual.redireciona);
        } else {
          respostaFinal = respostaPossivelAtual.resposta;
        }
      }
    }
  }

  console.log(respostaFinal);
  if (confianca < 0) {
    confianca = 0;
  }
  console.log("Nivel de confiança: " + confianca + "%");
  console.log(explicacao);
})();