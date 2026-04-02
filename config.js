/* ╔══════════════════════════════════════════════════════════╗
   ║           ARQUIVO DE CONFIGURAÇÃO DO PORTFÓLIO           ║
   ║  Edite APENAS este arquivo para personalizar seu site.   ║
   ║  Não é necessário tocar em index.html ou script.js.      ║
   ╚══════════════════════════════════════════════════════════╝ */

const PORTFOLIO_CONFIG = {

  /* ──────────────────────────────
     PERFIL PESSOAL
  ────────────────────────────── */
  profile: {
    name:       "Seu Nome Completo",
    shortName:  "SeuNome",           // Exibido na navbar e footer
    title:      "Desenvolvedor Full Stack · Especialista em TI",
    location:   "Brasil · Remoto",
    status:     "Disponível para projetos",   // Texto do badge verde

    // Foto: coloque o arquivo de imagem na mesma pasta e informe o nome.
    // Ex: "foto.jpg" | "avatar.png" | "profile.webp"
    // Deixe "" para exibir o avatar padrão (silhueta).
    photo:      "",

    // Estatísticas exibidas no card
    stats: {
      projects:      12,   // nº de projetos
      certifications: 8,   // nº de certificações
      yearsExp:       4,   // anos de experiência
    },

    // Frase de destaque na seção hero
    headline:   "Transformando <em>ideias</em><br/>em soluções digitais",
    subheadline: "Apaixonado por tecnologia, desenvolvimento de software e inovação. Construindo o futuro linha por linha.",
  },

  /* ──────────────────────────────
     LINKS DE CONTATO E REDES
  ────────────────────────────── */
  links: {
    github:   "https://github.com/seu-usuario",
    linkedin: "https://www.linkedin.com/in/seu-usuario",
    email:    "seu@email.com",
    credly:   "https://www.credly.com/users/seu-usuario",
  },

  /* ──────────────────────────────
     TICKER DE TECNOLOGIAS (hero)
     Lista separada por vírgulas
  ────────────────────────────── */
  techTicker: [
    "JavaScript", "Python", "React", "Node.js",
    "Docker", "AWS", "TypeScript", "SQL", "Git", "Linux",
  ],

  /* ──────────────────────────────
     HABILIDADES TÉCNICAS
     Cada categoria tem:
       icon   → emoji
       title  → nome da categoria
       tags   → lista de tecnologias (badges)
       bars   → até 2 barras de proficiência (0–100)
  ────────────────────────────── */
  skills: [
    {
      icon: "⚡",
      title: "Frontend",
      tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"],
      bars: [
        { label: "React",      value: 88 },
        { label: "TypeScript", value: 80 },
      ],
    },
    {
      icon: "🛠️",
      title: "Backend",
      tags: ["Node.js", "Python", "FastAPI", "REST API", "GraphQL", "Express"],
      bars: [
        { label: "Node.js", value: 85 },
        { label: "Python",  value: 78 },
      ],
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      tags: ["AWS", "Docker", "Git", "CI/CD", "Linux", "Vercel"],
      bars: [
        { label: "Docker", value: 75 },
        { label: "AWS",    value: 70 },
      ],
    },
    {
      icon: "🗄️",
      title: "Banco de Dados",
      tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
      bars: [
        { label: "PostgreSQL", value: 82 },
        { label: "MongoDB",    value: 72 },
      ],
    },
  ],

  /* ──────────────────────────────
     PROJETOS DO GITHUB
     featured: true → card largo (destaque)
     langColor → cor hex da linguagem principal
     demo: "" → oculta botão de demo
  ────────────────────────────── */
  projects: [
    {
      icon:      "📦",
      title:     "Nome do Projeto Principal",
      desc:      "Descreva aqui o que esse projeto faz, qual problema resolve e quais tecnologias foram utilizadas. Seja objetivo e impactante.",
      tech:      ["React", "Node.js", "PostgreSQL"],
      github:    "https://github.com/seu-usuario/projeto-1",
      demo:      "https://projeto-1.vercel.app",
      langColor: "#f7df1e",   // amarelo = JavaScript
      featured:  true,
    },
    {
      icon:      "🤖",
      title:     "Projeto Python / IA",
      desc:      "Descrição do projeto. Destaque as funcionalidades principais e o impacto que ele tem.",
      tech:      ["Python", "FastAPI", "Docker"],
      github:    "https://github.com/seu-usuario/projeto-2",
      demo:      "",
      langColor: "#3572A5",   // azul = Python
      featured:  false,
    },
    {
      icon:      "🌐",
      title:     "API REST / Microserviços",
      desc:      "Descreva a arquitetura e os desafios técnicos superados nesse projeto.",
      tech:      ["Node.js", "MongoDB", "JWT"],
      github:    "https://github.com/seu-usuario/projeto-3",
      demo:      "",
      langColor: "#2196F3",
      featured:  false,
    },
    {
      icon:      "📊",
      title:     "Dashboard Analytics",
      desc:      "Painel de dados em tempo real com gráficos interativos e relatórios automatizados.",
      tech:      ["React", "D3.js", "Redis"],
      github:    "https://github.com/seu-usuario/projeto-4",
      demo:      "",
      langColor: "#F05032",
      featured:  false,
    },
  ],

  /* ──────────────────────────────
     OBJETIVOS DE CARREIRA
  ────────────────────────────── */
  goals: [
    {
      tag:   "Curto prazo",
      title: "Especialização em Cloud",
      desc:  "Aprofundar conhecimentos em AWS e arquitetura de microserviços, obtendo a certificação Solutions Architect.",
    },
    {
      tag:   "Médio prazo",
      title: "Liderança Técnica",
      desc:  "Assumir papel de Tech Lead em projetos de grande escala, mentorando outros desenvolvedores.",
    },
    {
      tag:   "Longo prazo",
      title: "Empreendedorismo Tech",
      desc:  "Criar uma startup de tecnologia com impacto social positivo, aplicando toda a experiência acumulada.",
    },
  ],

  /* ──────────────────────────────
     CERTIFICAÇÕES CREDLY
     badgeUrl → link do badge (credly.com/badges/...)
     badgeImg → URL da imagem oficial do badge no Credly
               Formato: https://images.credly.com/size/680x680/images/ID/image.png
               Deixe "" para usar o ícone SVG padrão gerado automaticamente.
     accentColor → cor da borda do ícone SVG (usado quando badgeImg = "")
     lines → até 3 linhas de texto SVG (usado quando badgeImg = "")
  ────────────────────────────── */
  certifications: [
    {
      title:       "AWS Solutions Architect",
      issuer:      "Amazon Web Services",
      year:        "2024",
      badgeUrl:    "https://www.credly.com/badges/SEU-BADGE-ID",
      badgeImg:    "",
      accentColor: "#f97316",
      lines:       ["AWS", "SOLUTIONS", "ARCHITECT"],
    },
    {
      title:       "Google Cloud Associate",
      issuer:      "Google Cloud",
      year:        "2024",
      badgeUrl:    "https://www.credly.com/badges/SEU-BADGE-ID-2",
      badgeImg:    "",
      accentColor: "#4285f4",
      lines:       ["GCP", "ASSOCIATE"],
    },
    {
      title:       "CCNA — Networking",
      issuer:      "Cisco",
      year:        "2023",
      badgeUrl:    "https://www.credly.com/badges/SEU-BADGE-ID-3",
      badgeImg:    "",
      accentColor: "#1ba0d7",
      lines:       ["CCNA", "CISCO"],
    },
    {
      title:       "PSM I — Scrum Master",
      issuer:      "Scrum.org",
      year:        "2023",
      badgeUrl:    "https://www.credly.com/badges/SEU-BADGE-ID-4",
      badgeImg:    "",
      accentColor: "#7c3aed",
      lines:       ["SCRUM", "MASTER", "PSM I"],
    },
  ],

  /* ──────────────────────────────
     RADAR DE COMPETÊNCIAS
     Valores de 0 a 100 para cada eixo
  ────────────────────────────── */
  radar: {
    frontend: 88,
    backend:  85,
    devops:   75,
    database: 82,
    cloud:    70,
    ai:       60,
  },

};
