// Este arquivo contém todos os dados do seu portfólio.
// Para editar, basta alterar o conteúdo abaixo e salvar, e seu site atualizará automaticamente!

const PORTFOLIO_DATA = {
    // ----------------------------------------------------
    // INFORMAÇÕES PESSOAIS
    // ----------------------------------------------------
    nome: "Felipe Salgado",
    foto: "https://avatars.githubusercontent.com/u/104802376?v=4", // Link da sua foto (Pode ser do GitHub, Instagram, etc)
    cargo: "Desenvolvedor",
    resumo: "Sou um desenvolvedor apaixonado por criar soluções incríveis e escaláveis. Tenho experiência em transformar desafios complexos em produtos digitais intuitivos e de alto desempenho.",

    // ----------------------------------------------------
    // CONTATOS & REDES SOCIAIS
    // (Deixe em branco "" para não mostrar)
    // ----------------------------------------------------
    contato: {
        github: "https://github.com/fesalgz",
        linkedin: "https://linkedin.com/in/felipeosalgado",
        email: "fosalgado@icloud.com"
    },

    // ----------------------------------------------------
    // SUAS HABILIDADES (Tecnologias que você domina)
    // ----------------------------------------------------
    habilidades: [
        "HTML5", "CSS3", "JavaScript", "Node.js", "Express", "SQLite", "EJS", "Git & GitHub", "Design Responsivo"
    ],

    // ----------------------------------------------------
    // SEUS PROJETOS
    // ----------------------------------------------------
    projetos: [
        {
            titulo: "Sistema de Ordem de Serviço",
            descricao: "Um sistema completo para gerenciar ordens de serviço, clientes e geração de relatórios, com painel dashboard dinâmico.",
            tecnologias: ["Node.js", "Express", "SQLite", "EJS"],
            // Se não tiver link do GitHub ou Demo, deixe em branco ""
            linkRepositorio: "https://github.com/fesalgz/sistema_ordem_de_servico",
            linkDemo: ""
        },
        {
            titulo: "Sistema Escolar",
            descricao: "Plataforma focada no gerenciamento de alunos, cadastro de notas bimestrais, com cálculo de média automático e estatísticas em tela.",
            tecnologias: ["JavaScript", "HTML", "CSS", "Node.js"],
            linkRepositorio: "https://github.com/seu-usuario/projeto-escola",
            linkDemo: "https://seusite.com/demo"
        },
        {
            titulo: "Portfólio de Desenvolvedor",
            descricao: "Meu portfólio pessoal, com design premium (Dark Mode, Glassmorphism), rodando direto no GitHub Pages de forma estática.",
            tecnologias: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
            linkRepositorio: "#",
            linkDemo: "#"
        }
    ]
};
