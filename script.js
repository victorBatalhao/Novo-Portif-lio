/* ══════════════════════════════════════════════════════════
   PORTFOLIO SCRIPT
   Lê todas as informações de config.js e monta o DOM.
   NÃO edite este arquivo para personalizar o portfólio —
   use config.js para isso.
══════════════════════════════════════════════════════════ */

const C = PORTFOLIO_CONFIG; // atalho

// ─── ÍCONES SVG reutilizáveis ───────────────────────────
const ICON_GITHUB = `<svg viewBox="0 0 24 24" fill="currentColor" width="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;
const ICON_EXTERNAL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
const ICON_ARROW    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;

/* ══════════════════════════════════
   1. PERFIL
══════════════════════════════════ */
function buildProfile() {
  const p = C.profile;

  // <title> da página
  document.title = `${p.name} — Portfólio`;

  // Navbar / Footer
  document.getElementById('navName').textContent    = p.shortName;
  document.getElementById('footerName').textContent = p.shortName;

  // Dados do card
  document.getElementById('profileName').textContent     = p.name;
  document.getElementById('profileTitle').textContent    = p.title;
  document.getElementById('profileLocation').textContent = p.location;
  document.getElementById('profileStatus').textContent   = p.status;

  // Estatísticas
  document.getElementById('statProjects').textContent = p.stats.projects;
  document.getElementById('statCerts').textContent    = p.stats.certifications;
  document.getElementById('statYears').textContent    = p.stats.yearsExp;

  // Hero text
  document.getElementById('heroHeadline').innerHTML  = p.headline;
  document.getElementById('heroSub').textContent     = p.subheadline;

  // Foto ou placeholder
  const avatarInner = document.getElementById('avatarInner');
  if (p.photo) {
    const img = document.createElement('img');
    img.src = p.photo;
    img.alt = p.name;
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:50%;';
    avatarInner.appendChild(img);
  } else {
    avatarInner.innerHTML = `
      <svg viewBox="0 0 80 80" fill="none" style="width:60px;height:60px;">
        <circle cx="40" cy="30" r="18" fill="#1e40af" opacity=".7"/>
        <ellipse cx="40" cy="72" rx="28" ry="18" fill="#1e40af" opacity=".5"/>
      </svg>`;
  }
}

/* ══════════════════════════════════
   2. TECH TICKER
══════════════════════════════════ */
function buildTicker() {
  const track = document.getElementById('tickerTrack');
  // Duplica a lista para o loop contínuo
  const items = [...C.techTicker, ...C.techTicker];
  track.innerHTML = items
    .map(t => `<span>${t}</span><span>·</span>`)
    .join('');
}

/* ══════════════════════════════════
   3. LINKS DE CONTATO
══════════════════════════════════ */
function buildLinks() {
  const l = C.links;

  document.getElementById('emailLink').href        = `mailto:${l.email}`;
  document.getElementById('emailLink').textContent = l.email;
  document.getElementById('emailBtn').href         = `mailto:${l.email}`;
  document.getElementById('linkedinBtn').href      = l.linkedin;
  document.getElementById('githubBtn').href        = l.github;
  document.getElementById('githubAllBtn').href     = l.github;
  document.getElementById('credlyAllBtn').href     = l.credly;
}

/* ══════════════════════════════════
   4. HABILIDADES
══════════════════════════════════ */
function buildSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = C.skills.map((s, i) => `
    <div class="skill-category" data-delay="${i * 100}">
      <div class="skill-cat-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <div class="skill-tags">
        ${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
      <div class="skill-bar-group">
        ${s.bars.map(b => `
          <div class="skill-bar-item">
            <span>${b.label}</span>
            <div class="skill-bar">
              <div class="skill-fill" data-width="${b.value}%"></div>
            </div>
            <span>${b.value}%</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════
   5. PROJETOS
══════════════════════════════════ */
function buildProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = C.projects.map((p, i) => `
    <article class="project-card ${p.featured ? 'featured' : ''}" data-delay="${i * 100}">
      <div class="project-card-inner">
        <div class="project-lang-dot" style="--clr:${p.langColor}"></div>
        <div class="project-header">
          <div class="project-icon">${p.icon}</div>
          <div class="project-links">
            <a href="${p.github}" target="_blank" class="icon-link" title="GitHub">${ICON_GITHUB}</a>
            ${p.demo ? `<a href="${p.demo}" target="_blank" class="icon-link" title="Live Demo">${ICON_EXTERNAL}</a>` : ''}
          </div>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p  class="project-desc">${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        ${p.featured ? '<div class="project-badge">⭐ Destaque</div>' : ''}
      </div>
    </article>
  `).join('');
}

/* ══════════════════════════════════
   6. OBJETIVOS
══════════════════════════════════ */
function buildGoals() {
  const timeline = document.getElementById('goalsTimeline');
  timeline.innerHTML = C.goals.map((g, i) => `
    <div class="goal-item" data-delay="${i * 150}">
      <div class="goal-marker">
        <div class="goal-dot"></div>
        <div class="goal-line"></div>
      </div>
      <div class="goal-content">
        <span class="goal-tag">${g.tag}</span>
        <h3>${g.title}</h3>
        <p>${g.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════
   7. RADAR DE COMPETÊNCIAS (SVG)
══════════════════════════════════ */
function buildRadar() {
  const r   = C.radar;
  const cx  = 120, cy = 120, maxR = 90;
  const labels = ['Frontend','Backend','DevOps','BD','Cloud','IA/ML'];
  const values = [r.frontend, r.backend, r.devops, r.database, r.cloud, r.ai];
  const n = 6;

  // Ângulo de cada eixo (hexágono, começa em cima)
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const pt    = (i, pct) => {
    const a = angle(i);
    return { x: cx + Math.cos(a) * maxR * pct, y: cy + Math.sin(a) * maxR * pct };
  };

  // Grades de fundo
  const grids = [1, 0.66, 0.33].map(scale => {
    const pts = Array.from({length: n}, (_, i) => {
      const p = pt(i, scale);
      return `${p.x},${p.y}`;
    }).join(' ');
    return `<polygon points="${pts}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`;
  }).join('');

  // Polígono de dados
  const dataPoints = values.map((v, i) => {
    const p = pt(i, v / 100);
    return `${p.x},${p.y}`;
  }).join(' ');

  // Labels
  const labelEls = labels.map((lbl, i) => {
    const offset = 16;
    const a = angle(i);
    const lx = cx + Math.cos(a) * (maxR + offset);
    const ly = cy + Math.sin(a) * (maxR + offset);
    const anchor = Math.abs(Math.cos(a)) < 0.1 ? 'middle'
                 : Math.cos(a) > 0 ? 'start' : 'end';
    return `<text x="${lx.toFixed(1)}" y="${(ly + 4).toFixed(1)}" text-anchor="${anchor}"
      fill="rgba(255,255,255,0.7)" font-size="10" font-family="DM Sans">${lbl}</text>`;
  }).join('');

  document.getElementById('radarSvg').innerHTML = `
    <defs>
      <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2563eb" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.4"/>
      </linearGradient>
    </defs>
    ${grids}
    <polygon class="radar-data" points="${dataPoints}"
      fill="url(#radarGrad)" stroke="#2563eb" stroke-width="2"/>
    ${labelEls}
  `;
}

/* ══════════════════════════════════
   8. CERTIFICAÇÕES
══════════════════════════════════ */
function buildCerts() {
  const grid = document.getElementById('certsGrid');
  grid.innerHTML = C.certifications.map((cert, i) => {
    // Se tiver imagem externa do Credly, usa ela; caso contrário gera SVG
    const badgeContent = cert.badgeImg
      ? `<img src="${cert.badgeImg}" alt="${cert.title}" style="width:60px;height:60px;border-radius:50%;object-fit:cover;">`
      : buildBadgeSVG(cert, i);

    return `
      <a href="${cert.badgeUrl}" target="_blank" class="cert-card" data-delay="${i * 100}">
        <div class="cert-badge-wrap">
          <div class="cert-badge-img">${badgeContent}</div>
          <div class="cert-verified">✓ Verificado</div>
        </div>
        <div class="cert-info">
          <h3>${cert.title}</h3>
          <p>${cert.issuer}</p>
          <span class="cert-date">${cert.year}</span>
        </div>
        <div class="cert-arrow">→</div>
      </a>
    `;
  }).join('');
}

function buildBadgeSVG(cert, index) {
  const gradId = `certGrad${index}`;
  const lines  = cert.lines || [cert.title.substring(0, 6).toUpperCase()];
  const yStart = lines.length === 1 ? 44 : lines.length === 2 ? 37 : 30;
  const lineEls = lines.map((line, li) =>
    `<text x="40" y="${yStart + li * 13}" text-anchor="middle" fill="white"
      font-size="${li === 0 ? 9 : 7}" font-weight="${li === 0 ? 'bold' : 'normal'}"
      font-family="Space Mono">${line}</text>`
  ).join('');

  return `
    <svg viewBox="0 0 80 80" fill="none">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="80" y2="80">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#${gradId})" stroke="${cert.accentColor}" stroke-width="2"/>
      ${lineEls}
    </svg>`;
}

/* ══════════════════════════════════
   9. NAVBAR SCROLL
══════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ══════════════════════════════════
   10. HAMBURGER
══════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const open  = navLinks.classList.contains('open');
  spans[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
  spans[1].style.opacity   = open ? '0' : '1';
  spans[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
});
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

/* ══════════════════════════════════
   11. CURSOR PERSONALIZADO
══════════════════════════════════ */
const cursor      = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');
document.addEventListener('mousemove', (e) => {
  cursor.style.left      = e.clientX + 'px';
  cursor.style.top       = e.clientY + 'px';
  setTimeout(() => {
    cursorTrail.style.left = e.clientX + 'px';
    cursorTrail.style.top  = e.clientY + 'px';
  }, 80);
});

/* ══════════════════════════════════
   12. RIPPLE NOS BOTÕES
══════════════════════════════════ */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn, .contact-btn');
  if (!btn) return;
  const rect   = btn.getBoundingClientRect();
  const size   = Math.max(rect.width, rect.height) * 1.5;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px;`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
});

/* ══════════════════════════════════
   13. SCROLL REVEAL
══════════════════════════════════ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

// Observa depois que o DOM dinâmico é construído
function observeReveal() {
  document.querySelectorAll('.skill-category, .project-card, .goal-item, .cert-card')
    .forEach(el => revealObs.observe(el));
}

/* ══════════════════════════════════
   14. BARRAS DE SKILL
══════════════════════════════════ */
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(fill => {
        setTimeout(() => { fill.style.width = fill.dataset.width; }, 200);
      });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

function observeBars() {
  document.querySelectorAll('.skill-category').forEach(el => barObs.observe(el));
}

/* ══════════════════════════════════
   15. CONTADORES ANIMADOS
══════════════════════════════════ */
function animateCounter(el, target, duration = 1200) {
  const step  = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target; clearInterval(timer); return; }
    el.textContent = Math.floor(current);
  }, 16);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(el => {
        animateCounter(el, parseInt(el.textContent));
      });
      counterObs.disconnect();
    }
  });
}, { threshold: 0.5 });

/* ══════════════════════════════════
   16. TILT 3D NOS CARDS
══════════════════════════════════ */
function observeTilt() {
  document.querySelectorAll('.project-card, .cert-card, .skill-category').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 8;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
      card.style.transform = `translateY(-6px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ══════════════════════════════════
   17. ACTIVE NAV LINK
══════════════════════════════════ */
const sections   = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinkEls.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ══════════════════════════════════
   18. PARALLAX HERO
══════════════════════════════════ */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const o1 = document.querySelector('.hero-orb-1');
  const o2 = document.querySelector('.hero-orb-2');
  if (o1) o1.style.transform = `translateY(${y * 0.15}px)`;
  if (o2) o2.style.transform = `translateY(${y * -0.1}px)`;
}, { passive: true });

/* ══════════════════════════════════
   19. FOOTER ANO
══════════════════════════════════ */
document.getElementById('footerYear').textContent = new Date().getFullYear();

/* ══════════════════════════════════
   INIT — monta tudo na sequência
══════════════════════════════════ */
(function init() {
  buildProfile();
  buildTicker();
  buildLinks();
  buildSkills();
  buildProjects();
  buildGoals();
  buildRadar();
  buildCerts();

  // Após o DOM dinâmico ser construído, ativa os observers
  observeReveal();
  observeBars();
  observeTilt();
  counterObs.observe(document.getElementById('profileCard'));

  // Injeta keyframe da foto (não bloqueia render)
  const style = document.createElement('style');
  style.textContent = `.ripple{position:absolute;border-radius:50%;transform:scale(0);animation:rippleAnim .6s linear;background:rgba(255,255,255,.3);pointer-events:none}@keyframes rippleAnim{to{transform:scale(4);opacity:0}}`;
  document.head.appendChild(style);

  console.log('%c🚀 Portfólio carregado | edite config.js para personalizar', 'color:#3b82f6;font-weight:bold;font-size:13px;');
})();
