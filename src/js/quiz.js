const perguntas = [
  { pergunta: "Quando alguém diz 'Tudo bem?', o que você deve responder?", opcoes: ["A) Bom dia", "B) Tudo bem", "C) Adeus"], resposta: "B" },
  { pergunta: "Qual dessas frases você usaria para pedir comida em um restaurante?", opcoes: ["A) Eu quero um prato de arroz, por favor.", "B) Onde fica o banheiro?", "C) Que horas são?"], resposta: "A" },
  { pergunta: "Qual é o significado de 'Estou atrasado'?", opcoes: ["A) Estou doente", "B) Estou com sono", "C) Estou chegando depois da hora"], resposta: "C" },
  { pergunta: "Você quer pagar no mercado. O caixa pergunta: 'Débito ou crédito?'. O que ele quer saber?", opcoes: ["A) Se você quer sacola", "B) Se vai pagar com cartão", "C) Se você quer troco"], resposta: "B" },
  { pergunta: "Qual dessas frases está mais natural em português?", opcoes: ["A) Eu ir no trabalho amanhã.", "B) Eu vou trabalhar amanhã.", "C) Eu trabalhando amanhã."], resposta: "B" },
  { pergunta: "Se alguém diz 'Está frio hoje!', qual resposta faz mais sentido?", opcoes: ["A) Verdade, está gelado!", "B) Não, estou com fome.", "C) Boa sorte!"], resposta: "A" },
  { pergunta: "Você quer pedir ajuda a alguém. O que você diz?", opcoes: ["A) Me ajuda, por favor?", "B) Você está bem?", "C) Tudo certo?"], resposta: "A" },
  { pergunta: "Qual dessas frases você usaria para agradecer?", opcoes: ["A) Obrigado!", "B) Desculpa!", "C) Tchau!"], resposta: "A" },
  { pergunta: "Qual dessas palavras é usada para cumprimentar alguém?", opcoes: ["A) Tchau", "B) Olá", "C) Dormir"], resposta: "B" },
  { pergunta: "Se alguém diz 'Até logo!', o que significa?", opcoes: ["A) Que vai te ver em breve", "B) Que está com raiva", "C) Que quer conversar agora"], resposta: "A" }
];

let indice = 0;
let acertos = 0;

const intro = document.getElementById("quiz-intro");
const quizSection = document.getElementById("quiz-section");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const respostaEl = document.getElementById("resposta");
const proximoBtn = document.getElementById("proximo");
const resultadoEl = document.getElementById("container-resultado");
const resultadoTexto = document.getElementById("resultado-texto");
const inicioBtn = document.getElementById("inicio-btn");
const iniciarQuizBtn = document.getElementById("inicio-quiz-btn");

function carregarPergunta() {
  const atual = perguntas[indice];
  perguntaEl.textContent = `${indice + 1} - ${atual.pergunta}`;
  opcoesEl.innerHTML = "";
  atual.opcoes.forEach(opcao => {
    const li = document.createElement("li");
    li.textContent = opcao;
    opcoesEl.appendChild(li);
  });
  respostaEl.value = "";
}

function proximaPergunta() {
  const respostaUsuario = respostaEl.value.trim().toUpperCase();
  if (respostaUsuario === perguntas[indice].resposta.toUpperCase()) {
    acertos++;
  }

  indice++;
  if (indice < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("container-perguntas").classList.add("hidden");
  proximoBtn.classList.add("hidden");
  resultadoEl.classList.remove("hidden");

  let nivel = "";
  if (acertos <= 3) {
    nivel = "Básico";
  } else if (acertos <= 6) {
    nivel = "Intermediário";
  } else {
    nivel = "Avançado";
  }

  resultadoTexto.innerHTML = `Você acertou ${acertos} perguntas de ${perguntas.length}! 🎯<br>Seu nível de português é: <strong>${nivel}</strong>`;
}

function reiniciarQuiz() {
  indice = 0;
  acertos = 0;
  resultadoEl.classList.add("hidden");
  document.getElementById("container-perguntas").classList.remove("hidden");
  proximoBtn.classList.remove("hidden");
  carregarPergunta();
}

iniciarQuizBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  quizSection.classList.remove("hidden");
  carregarPergunta();
});

proximoBtn.addEventListener("click", proximaPergunta);
inicioBtn.addEventListener("click", reiniciarQuiz);
