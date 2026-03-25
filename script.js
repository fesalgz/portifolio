// ==========================================
// PREENCHIMENTO DINÂMICO DOS DADOS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    /* Verifica se dados.js foi carregado */
    if (typeof PORTFOLIO_DATA === 'undefined') {
        console.error("Erro: arquivo dados.js não foi carregado corretamente.");
        return;
    }

    const data = PORTFOLIO_DATA;

    // 1. Preencher Header e Hero
    document.getElementById('nav-logo').textContent = data.nome.split(' ')[0] + '.';
    document.getElementById('hero-img').src = data.foto;
    document.getElementById('hero-name').textContent = data.nome;
    document.getElementById('hero-role').textContent = data.cargo;
    document.getElementById('footer-name').textContent = data.nome;

    // Redes no Hero
    const heroSocial = document.getElementById('hero-social');
    if (data.contato.github) {
        heroSocial.innerHTML += `<a href="${data.contato.github}" target="_blank" aria-label="GitHub"><i class="ph ph-github-logo"></i></a>`;
    }
    if (data.contato.linkedin) {
        heroSocial.innerHTML += `<a href="${data.contato.linkedin}" target="_blank" aria-label="LinkedIn"><i class="ph ph-linkedin-logo"></i></a>`;
    }

    // 2. Preencher "Sobre Mim"
    document.getElementById('about-text').textContent = data.resumo;

    // 3. Preencher "Habilidades"
    const skillsContainer = document.getElementById('skills-container');
    data.habilidades.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-tag';
        div.textContent = skill;
        skillsContainer.appendChild(div);
    });

    // 4. Preencher "Projetos"
    const projectsContainer = document.getElementById('projects-container');
    data.projetos.forEach(proj => {
        const techSpans = proj.tecnologias.map(tech => `<span>${tech}</span>`).join('');
        
        let linksHTML = '';
        if (proj.linkRepositorio) {
            linksHTML += `<a href="${proj.linkRepositorio}" target="_blank" title="Código Fonte"><i class="ph ph-github-logo"></i></a>`;
        }
        if (proj.linkDemo) {
            linksHTML += `<a href="${proj.linkDemo}" target="_blank" title="Ver ao Vivo"><i class="ph ph-arrow-square-out"></i></a>`;
        }

        const projectCard = `
            <div class="card glass-card project-card">
                <div class="project-header">
                    <i class="ph ph-folder-simple project-icon"></i>
                    <div class="project-links">
                        ${linksHTML}
                    </div>
                </div>
                <h3>${proj.titulo}</h3>
                <p>${proj.descricao}</p>
                <div class="project-tech">
                    ${techSpans}
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectCard;
    });

    // 5. Preencher "Contato"
    const contactActions = document.getElementById('contact-actions');
    if (data.contato.email) {
        contactActions.innerHTML += `<a href="mailto:${data.contato.email}" class="btn btn-primary"><i class="ph ph-envelope-simple"></i> Fale Comigo</a>`;
    }
    if (data.contato.linkedin) {
        contactActions.innerHTML += `<a href="${data.contato.linkedin}" target="_blank" class="btn btn-outline"><i class="ph ph-linkedin-logo"></i> LinkedIn</a>`;
    }

    // ==========================================
    // EFEITOS E INTERAÇÕES (UI)
    // ==========================================

    // Glow Effect acompanhando o mouse
    const glow = document.getElementById('mouse-glow');
    window.addEventListener('mousemove', (e) => {
        // Usa requestAnimationFrame paramelhorar performance
        requestAnimationFrame(() => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    });

    // Reveal elements On Scroll (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Aparece quando 15% do elemento está visível
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // observer.unobserve(entry.target); // Descomente para animar apenas uma vez
            } else {
                entry.target.classList.remove('active'); // Comente para não repetir
            }
        });
    }, observerOptions);

    reveals.forEach(element => {
        revealOnScroll.observe(element);
    });

});
