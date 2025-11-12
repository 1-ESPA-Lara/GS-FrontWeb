const perguntas = [
  { pergunta: "O que é o HTML?", opcoes: ["A) Uma linguagem de programação", "B) Uma linguagem de marcação", "C) Um banco de dados"], resposta: "B" },
  { pergunta: "Qual destas é uma linguagem de programação?", opcoes: ["A) CSS", "B) HTML", "C) JavaScript"], resposta: "C" }, 
  { pergunta: "O que o CSS controla em um site?", opcoes: ["A) Estrutura", "B) Estilo e design", "C) Banco de dados"], resposta: "B" }, 
  { pergunta: "O que significa a sigla 'CPU'?", opcoes: ["A) Central Processing Unit", "B) Computer Personal Unit", "C) Central Program User"], resposta: "A" }, 
  { pergunta: "Qual é a principal função do JavaScript?", opcoes: ["A) Criar interatividade nas páginas", "B) Fazer backup de arquivos", "C) Gerar relatórios"], resposta: "A" }
];

let indice = 0;
let acertos = 0;

const intro = document.getElementById("quiz-intro");
const quizSection = document.getElementById("quiz-section");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes"); // ADICIONADO
const respostaEl = document.getElementById("resposta");
const proximoBtn = document.getElementById("proximo");
const resultadoEl = document.getElementById("container-resultado");
const resultadoTexto = document.getElementById("resultado-texto");
const inicioBtn = document.getElementById("inicio-btn");
const iniciarQuizBtn = document.getElementById("inicio-quiz-btn");

function carregarPergunta() {
  const atual = perguntas[indice];
  perguntaEl.textContent = `${indice + 1} - ${atual.pergunta}`;
  
  // LIMPAR E POPULAR AS OPÇÕES
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
  resultadoTexto.textContent = `Você acertou ${acertos} perguntas de ${perguntas.length}! 🎉`;
}

function reiniciarQuiz() {
  indice = 0;
  acertos = 0;
  resultadoEl.classList.add("hidden");
  document.getElementById("container-perguntas").classList.remove("hidden");
  proximoBtn.classList.remove("hidden");
  carregarPergunta();
}

// Inicia o quiz após clicar no botão
iniciarQuizBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  quizSection.classList.remove("hidden");
  carregarPergunta();
});

proximoBtn.addEventListener("click", proximaPergunta);
inicioBtn.addEventListener("click", reiniciarQuiz);