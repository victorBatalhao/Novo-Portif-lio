/* ══════════════════════════════════
   PORTFOLIO SCRIPT
══════════════════════════════════ */

// ─── CURSOR PERSONALIZADO ───
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');
if (cursor && cursorTrail) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      cursorTrail.style.left = e.clientX + 'px';
      cursorTrail.style.top = e.clientY + 'px';
    }, 80);
  });
}

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = navLinks.classList.contains('open');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px,5px)' : '';
  spans[1].style.opacity = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ─── UPLOAD DE FOTO ───
const avatarInput = document.getElementById('avatarInput');
const avatarImg = document.getElementById('avatarImg');
const avatarPlaceholder = document.getElementById('avatarPlaceholder');

avatarInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    avatarImg.src = ev.target.result;
    avatarImg.style.display = 'block';
    avatarPlaceholder.style.display = 'none';
    // animação ao carregar foto
    avatarImg.style.animation = 'none';
    requestAnimationFrame(() => {
      avatarImg.style.animation = 'photoReveal 0.5s ease both';
    });
  };
  reader.readAsDataURL(file);
});

// ─── RIPPLE NOS BOTÕES ───
document.querySelectorAll('.btn, .contact-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 1.5;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.cssText = `
      width:${size}px;height:${size}px;
      left:${x - size/2}px;top:${y - size/2}px;
    `;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// ─── SCROLL REVEAL com IntersectionObserver ───
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -60px 0px' };

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.skill-category, .project-card, .goal-item, .cert-card'
).forEach(el => revealObserver.observe(el));

// ─── SKILL BARS ─── (anima quando visível)
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        const target = fill.dataset.width;
        setTimeout(() => { fill.style.width = target; }, 200);
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => barObserver.observe(el));

// ─── CONTADOR ANIMADO ───
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target; clearInterval(timer); return; }
    el.textContent = Math.floor(start);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(el => {
        animateCounter(el, parseInt(el.textContent), 1200);
      });
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const profileCard = document.querySelector('.profile-card');
if (profileCard) counterObserver.observe(profileCard);

// ─── ACTIVE NAV LINK ───
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinkEls.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}, { passive: true });

// ─── FOOTER ANO ───
document.getElementById('footerYear').textContent = new Date().getFullYear();

// ─── SYNC NOME NO NAV ───
const profileName = document.getElementById('profileName');
const navNameEl = document.getElementById('navName');
const footerNameEl = document.getElementById('footerName');

if (profileName) {
  profileName.addEventListener('input', () => {
    const name = profileName.textContent.split(' ')[0] || 'Dev';
    if (navNameEl) navNameEl.textContent = name;
    if (footerNameEl) footerNameEl.textContent = name;
  });
}

// ─── SMOOTH HOVER NOS CARDS ───
document.querySelectorAll('.project-card, .cert-card, .skill-category').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    card.style.transform = `translateY(-6px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ─── PARALLAX HERO ORBS ───
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  if (orb1) orb1.style.transform = `translateY(${scrolled * 0.15}px)`;
  if (orb2) orb2.style.transform = `translateY(${scrolled * -0.1}px)`;
}, { passive: true });

// ─── FOTO KEYFRAME ───
const style = document.createElement('style');
style.textContent = `
  @keyframes photoReveal {
    from { opacity: 0; transform: scale(0.8); filter: blur(8px); }
    to   { opacity: 1; transform: scale(1); filter: blur(0); }
  }
`;
document.head.appendChild(style);

console.log('%c🚀 Portfólio carregado com sucesso!', 'color:#3b82f6;font-size:14px;font-weight:bold;');
