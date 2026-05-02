/* ===== MENU HAMBÚRGUER ===== */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

/* ===== VER MAIS / MENOS - GALERIA DE ROUPAS ===== */
let expanded = false;

function verMais() {
  const hidden = document.querySelectorAll('.hidden-card');
  const btnTexto = document.getElementById('btn-texto');
  const btnIcon  = document.getElementById('btn-icon');

  expanded = !expanded;

  hidden.forEach(card => {
    if (expanded) {
      card.style.display = 'block';
      // animação de entrada suave
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      requestAnimationFrame(() => {
        card.style.transition = 'opacity .4s ease, transform .4s ease';
        card.style.opacity    = '1';
        card.style.transform  = 'translateY(0)';
      });
    } else {
      card.style.display = 'none';
      card.style.transition = '';
    }
  });

  // Atualiza o texto e ícone do botão
  btnTexto.textContent = expanded ? 'Ver menos' : 'Ver mais peças';
  btnIcon.textContent  = expanded ? '▲' : '▼';
}

/* ===== SCROLL SUAVE PARA LINKS INTERNOS ===== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    // Verifica se não é um link de WhatsApp ou e-mail
    if (link.getAttribute('href').startsWith('#') && link.getAttribute('href').length > 1) {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
        const offset = 70; // altura do header fixo
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        
        // Fecha o menu mobile após clicar (se estiver aberto)
        closeMenu();
      }
    }
  });
});

/* ===== HEADER SHADOW DINÂMICO AO ROLAR ===== */
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 2px 30px rgba(0,0,0,.55)';
  } else {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,.4)';
  }
});

/* ===== ANIMAÇÃO DE ENTRADA DOS CARDS (OPCIONAL) ===== */
// Adiciona classe para cards aparecerem com fade ao rolar a página
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplica animação em todos os cards após o carregamento
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
  
  // Garante que os cards ocultos não fiquem com opacity 0
  const hiddenCards = document.querySelectorAll('.hidden-card');
  hiddenCards.forEach(card => {
    if (card.style.display === 'none') {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

/* ===== PREVENIR CLIQUE EM LINKS VAZIOS ===== */
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});

/* ===== FECHAR MENU AO REDIMENSIONAR A TELA (MODO TABLET/DESKTOP) ===== */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

/* ===== CARREGAMENTO DAS IMAGENS (LAZY LOAD MANUAL) ===== */
// Garante que imagens com lazy loading carreguem corretamente
if ('loading' in HTMLImageElement.prototype) {
  // Browser suporta lazy loading nativo
  console.log('Lazy loading nativo suportado');
} else {
  // Fallback para browsers antigos
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // força o carregamento
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}

/* ===== BOTÃO DO WHATSAPP - RASTREAMENTO DE CLIQUE (OPCIONAL) ===== */
const wpButton = document.querySelector('.wp-float');
if (wpButton) {
  wpButton.addEventListener('click', () => {
    console.log('Botão WhatsApp clicado - Redirecionando para o chat');
    // Você pode adicionar analytics aqui se quiser
  });
}
