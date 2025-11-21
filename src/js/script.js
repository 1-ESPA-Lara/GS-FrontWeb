const profissionais = [
    {
        nome: "Maria Silva",
        profissão: "Assistente Administrativa",
        cidade: "São Paulo – SP",
        nacionalidade: "Venezuelana",
        habilidades: "Excel, atendimento, espanhol nativo, português avançado.",
        resumo: "5 anos de experiência com atendimento ao público, organização de documentos e suporte operacional.",
        foto: "../assets/profissional1.jpg"
    },
    {
        nome: "Ahmed Hassan",
        profissão: "Desenvolvedor Front-End",
        cidade: "Rio de Janeiro – RJ",
        nacionalidade: "Sírio",
        habilidades: "JavaScript, React, UI/UX básico.",
        resumo: "Programador com foco em React, HTML, CSS e acessibilidade.",
        foto: "../assets/profissional2.avif"
    },
    {
        nome: "Laila Mohammed",
        profissão: "Professora de Inglês",
        cidade: "Curitiba – PR",
        nacionalidade: "Egípcia",
        habilidades: "Inglês fluente, didática, aulas online.",
        resumo: "Ensina inglês para crianças e adultos, certificada TEFL.",
        foto: "../assets/profissional3.avif"
    },
    {
        nome: "Samuel Osei",
        profissão: "Analista de Suporte Técnico",
        cidade: "São Paulo – SP",
        nacionalidade: "Ganês",
        habilidades: "Windows, redes, atendimento.",
        resumo: "Experiência em help desk, manutenção de computadores e suporte remoto.",
        foto: "../assets/profissional4.avif"
    },
    {
        nome: "Nur Amina",
        profissão: "Costureira e Modelista",
        cidade: "Guarulhos – SP",
        nacionalidade: "Afegã",
        habilidades: "costura fina, máquinas industriais.",
        resumo: "Especialista em ajustes, confecção e bordado manual.",
        foto: "../assets/profissional5.avif"
    },
    {
        nome: "Carlos Méndez",
        profissão: "Barista",
        cidade: "Belo Horizonte – MG",
        nacionalidade: "Colombiano",
        habilidades: "latte art, hospitabilidade, operação de máquinas.",
        resumo: "3 anos trabalhando com preparo de cafés especiais e atendimento.",
        foto: "../assets/profissional6.avif"
    },
    {
        nome: "Sofia Petrova",
        profissão: "Designer Gráfica",
        cidade: "Florianópolis – SC",
        nacionalidade: "Ucraniana",
        habilidades: "Illustrator, Photoshop, Figma.",
        resumo: "Criação de logos, identidade visual e materiais digitais.",
        foto: "../assets/profissional7.avif"
    },
    {
        nome: "Ibrahim Al-Rashid",
        profissão: "Cozinheiro",
        cidade: "São Paulo – SP",
        nacionalidade: "Sírio",
        habilidades: "cozinha quente, carnes, molhos tradicionais",
        resumo: "Cozinheiro especializado em comida árabe, experiência em restaurantes.",
        foto: "../assets/profissional8.avif"
    },
    {
        nome: "Thalita Mendoza",
        profissão: "Cuidadora de Idosos",
        cidade: "Porto Alegre – RS",
        nacionalidade: "Peruana",
        habilidades: "empatia, organização, português intermediário.",
        resumo: "Experiência com cuidados básicos, rotina de medicamentos e companhia.",
        foto: "../assets/profissional9.avif"
    },
    {
        nome: "Moussa Diallo",
        profissão: "Motorista Particular",
        cidade: "Brasília – DF",
        nacionalidade: "Senegales",
        habilidades: "direção defensiva, rotas rápidas, atendimento profissional.",
        resumo: "10 anos de experiência, CNH categoria B, trabalha com transporte executivo.",
        foto: "../assets/profissional10.avif"
    },
];

 let index = 0;
    const card = document.getElementById("card");

    function criarIndicadores() {
      const container = document.getElementById("indicadores");
      container.innerHTML = "";
      profissionais.forEach((_, i) => {
        const indicador = document.createElement("div");
        indicador.className = "indicador";
        if (i === index) indicador.classList.add("ativo");
        container.appendChild(indicador);
      });
    }

    function atualizarCard() {
      const p = profissionais[index];

      document.getElementById("foto").src = p.foto;
      document.getElementById("nome").textContent = p.nome;
      document.getElementById("profissao").textContent = p.profissão;
      document.getElementById("cidade").textContent = p.cidade;
      document.getElementById("nacionalidade").textContent = p.nacionalidade;
      document.getElementById("habilidades").textContent = p.habilidades;
      document.getElementById("resumo").textContent = p.resumo;

      card.style.opacity = 0;
      setTimeout(() => {
        card.style.opacity = 1;
        lucide.createIcons();
      }, 200);

      document.querySelectorAll(".indicador").forEach((ind, i) => {
        ind.classList.toggle("ativo", i === index);
      });
    }

    function proximo() {
      index = (index + 1) % profissionais.length;
      atualizarCard();
    }

    criarIndicadores();
    atualizarCard();
    setInterval(proximo, 4000);