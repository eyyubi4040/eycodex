/* ==========================================================================
   EYCODEX DIGITAL AGENCY - CORE INTERACTION & PARTICLE ENGINE (main.js)
   ========================================================================== */

// 1. Toast Notification Helper
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f5a0" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// 2. Dynamic Interactive Canvas Particle Network Background (Optimized for 60-120 FPS)
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width, height;
  let particles = [];
  let isMobile = window.innerWidth < 768 || ('ontouchstart' in window);
  let mouse = { x: null, y: null, radius: 140 };
  let isPaused = false;
  let isScrolling = false;
  let scrollTimer = null;
  let animId = null;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    isMobile = width < 768 || ('ontouchstart' in window);
    createParticles();
  }

  window.addEventListener('resize', resize, { passive: true });

  // Pause canvas drawing during active scrolling to give 100% GPU budget to smooth touch scroll
  window.addEventListener('scroll', () => {
    isScrolling = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      isScrolling = false;
    }, 100);
  }, { passive: true });
  
  if (!isMobile) {
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    }, { passive: true });
  }

  // Pause when tab not visible to save CPU/Battery
  document.addEventListener('visibilitychange', () => {
    isPaused = document.hidden;
    if (!isPaused && !animId) {
      animate();
    }
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * (isMobile ? 1.2 : 1.8) + 0.8;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.45);
      this.vy = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.45);
      this.alpha = Math.random() * 0.35 + 0.15;
      this.color = Math.random() > 0.5 ? 'rgba(0, 242, 254,' : 'rgba(127, 0, 255,';
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color} ${this.alpha})`;
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse interactivity on desktop
      if (!isMobile && mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          this.x -= directionX * force * 2;
          this.y -= directionY * force * 2;
        }
      }
    }
  }

  function createParticles() {
    particles = [];
    const count = isMobile 
      ? Math.min(Math.floor((width * height) / 45000), 12) 
      : Math.min(Math.floor((width * height) / 20000), 45);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connect() {
    if (isMobile) return; // Skip heavy distance calculations on mobile for buttery 60-120fps
    const len = particles.length;
    for (let a = 0; a < len; a++) {
      for (let b = a + 1; b < len; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          const opacity = (1 - dist / 100) * 0.14;
          ctx.strokeStyle = `rgba(0, 242, 254, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    if (isPaused) {
      animId = null;
      return;
    }
    if (!isScrolling) {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      if (!isMobile) connect();
    }
    animId = requestAnimationFrame(animate);
  }

  resize();
  animate();
}

// 3. Scroll Reveal Engine (IntersectionObserver)
function observeReveals() {
  const reveals = document.querySelectorAll('.reveal:not(.revealed)');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px 40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// 4. Animated Number Counters (High Performance RAF Interpolation)
function initCounters() {
  const statsSection = document.querySelector('.hero-stats-row');
  if (!statsSection) return;

  const statNumbers = document.querySelectorAll('.stat-number');
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      observer.unobserve(statsSection);

      const duration = 1400; // ms
      const startTime = performance.now();

      const targets = Array.from(statNumbers).map(stat => ({
        el: stat,
        target: parseInt(stat.getAttribute('data-target') || stat.textContent, 10) || 0
      }));

      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart

        targets.forEach(item => {
          const current = Math.round(item.target * ease);
          item.el.textContent = current;
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          targets.forEach(item => {
            item.el.textContent = item.target;
          });
        }
      }

      requestAnimationFrame(step);
    }
  }, { threshold: 0.25 });

  observer.observe(statsSection);
}

// 5. FAQ Accordion Handler
function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// 6. Navigation, Mobile Menu & Sticky Header
function initNav() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const backToTop = document.getElementById('back-to-top');

  let isScrolled = false;
  let isBackToTopVisible = false;

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    const shouldScroll = scrollY > 30;
    if (shouldScroll !== isScrolled) {
      isScrolled = shouldScroll;
      if (header) header.classList.toggle('scrolled', isScrolled);
    }

    const shouldShowBtt = scrollY > 350;
    if (shouldShowBtt !== isBackToTopVisible) {
      isBackToTopVisible = shouldShowBtt;
      if (backToTop) backToTop.classList.toggle('visible', isBackToTopVisible);
    }
  }, { passive: true });

  if (mobileToggle && navMenu) {
    function closeMobileMenu() {
      navMenu.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    function openMobileMenu() {
      navMenu.classList.add('open');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    mobileToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (navMenu.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Handle on-page hash anchors (e.g. #services, #portfolio, #why-us, #contact, #home)
    navMenu.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.length > 1) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            closeMobileMenu();

            const headerOffset = 70;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            if (window.history && window.history.pushState) {
              window.history.pushState(null, null, href);
            }
          }
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Prevent body scroll locking issues on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    }, { passive: true });
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// 7. Custom Multi-Select Dropdown
function updateAllMultiselects() {
  document.querySelectorAll('.custom-multiselect').forEach(ms => {
    if (typeof ms.updateMultiselectDisplay === 'function') {
      ms.updateMultiselectDisplay();
    }
  });
}

function initCustomMultiSelect() {
  const multiselects = document.querySelectorAll('.custom-multiselect');
  if (!multiselects.length) return;

  multiselects.forEach(ms => {
    const trigger = ms.querySelector('.multiselect-trigger');
    const display = ms.querySelector('.multiselect-selected-text');
    const badge = ms.querySelector('.multiselect-count-badge');
    const options = ms.querySelectorAll('.multiselect-option');
    const selectAllBtn = ms.querySelector('.multiselect-action-btn');

    function updateDisplay() {
      const checkedOptions = Array.from(options).filter(opt => {
        const input = opt.querySelector('input[type="checkbox"]');
        return input && input.checked;
      });

      // Update .selected class on option rows
      options.forEach(opt => {
        const input = opt.querySelector('input[type="checkbox"]');
        if (input && input.checked) {
          opt.classList.add('selected');
        } else {
          opt.classList.remove('selected');
        }
      });

      // Update badge
      if (badge) {
        if (checkedOptions.length > 0) {
          badge.textContent = checkedOptions.length;
          badge.style.display = 'flex';
        } else {
          badge.style.display = 'none';
        }
      }

      // Update trigger text / tags
      const isTr = (typeof currentLang !== 'undefined' && currentLang === 'tr');
      const placeholderText = (typeof translations !== 'undefined' && translations[currentLang]?.select_service_placeholder) 
        ? translations[currentLang].select_service_placeholder 
        : (isTr ? 'Hizmet Seçiniz...' : 'Select Services...');
      
      const allText = (typeof translations !== 'undefined' && translations[currentLang]?.all_selected) 
        ? translations[currentLang].all_selected 
        : (isTr ? 'Tüm Hizmetler Seçildi' : 'All Services Selected');

      if (checkedOptions.length === 0) {
        display.innerHTML = `<span class="multiselect-placeholder">${placeholderText}</span>`;
      } else if (checkedOptions.length === options.length) {
        display.innerHTML = `<span class="multiselect-tag">${allText}</span>`;
      } else if (checkedOptions.length <= 2) {
        display.innerHTML = checkedOptions.map(opt => {
          const label = opt.querySelector('.multiselect-option-label')?.textContent.trim() || '';
          return `<span class="multiselect-tag">${label}</span>`;
        }).join('');
      } else {
        const firstLabel = checkedOptions[0].querySelector('.multiselect-option-label')?.textContent.trim() || '';
        const moreCount = checkedOptions.length - 1;
        display.innerHTML = `<span class="multiselect-tag">${firstLabel}</span><span class="multiselect-tag-more">+${moreCount}</span>`;
      }

      // Update action button text
      if (selectAllBtn) {
        const areAllSelected = (checkedOptions.length === options.length);
        const clearText = (typeof translations !== 'undefined' && translations[currentLang]?.clear_all) ? translations[currentLang].clear_all : (isTr ? 'Temizle' : 'Clear All');
        const selectAllText = (typeof translations !== 'undefined' && translations[currentLang]?.select_all) ? translations[currentLang].select_all : (isTr ? 'Tümünü Seç' : 'Select All');
        selectAllBtn.textContent = areAllSelected ? clearText : selectAllText;
      }
    }

    // Toggle dropdown open/close on trigger click
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = ms.classList.contains('open');
        document.querySelectorAll('.custom-multiselect.open').forEach(other => {
          if (other !== ms) other.classList.remove('open');
        });
        ms.classList.toggle('open', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));
      });
    }

    // Option selection click handler
    options.forEach(opt => {
      const input = opt.querySelector('input[type="checkbox"]');
      if (!input) return;

      opt.addEventListener('click', (e) => {
        if (e.target !== input) {
          e.preventDefault();
          input.checked = !input.checked;
        }
        updateDisplay();
      });
    });

    // Select All / Clear button handler
    if (selectAllBtn) {
      selectAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const checkedCount = Array.from(options).filter(opt => opt.querySelector('input')?.checked).length;
        const shouldSelectAll = checkedCount < options.length;
        options.forEach(opt => {
          const input = opt.querySelector('input[type="checkbox"]');
          if (input) input.checked = shouldSelectAll;
        });
        updateDisplay();
      });
    }

    // Expose update method
    ms.updateMultiselectDisplay = updateDisplay;

    // Initial sync
    updateDisplay();
  });

  // Global click outside listener
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-multiselect')) {
      document.querySelectorAll('.custom-multiselect.open').forEach(ms => {
        ms.classList.remove('open');
        ms.querySelector('.multiselect-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Global escape key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.custom-multiselect.open').forEach(ms => {
        ms.classList.remove('open');
        ms.querySelector('.multiselect-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

// 8. Contact Form Handling (WhatsApp Integration)
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isTr = (typeof currentLang !== 'undefined' && currentLang === 'tr');

    const name = document.getElementById('form-name')?.value.trim() || '';
    const email = document.getElementById('form-email')?.value.trim() || '';
    const phone = document.getElementById('form-phone')?.value.trim() || '';
    const company = document.getElementById('form-company')?.value.trim() || '';
    // Collect all selected services
    const selectedChips = [];
    form.querySelectorAll('.service-chip-input:checked').forEach(input => {
      const label = input.closest('.multiselect-option')?.querySelector('.multiselect-option-label')?.textContent.trim()
                 || input.closest('.service-chip')?.querySelector('.service-chip-content span')?.textContent.trim();
      if (label) selectedChips.push(label);
    });
    const service = selectedChips.length > 0 ? selectedChips.join(', ') : (isTr ? 'Genel Web Danışmanlığı' : 'General Web Consulting');
    const message = document.getElementById('form-message')?.value.trim() || '';

    if (!name || !email || !phone) {
      alert(isTr ? 'Lütfen zorunlu alanları (Ad, E-Posta, Telefon) doldurunuz.' : 'Please fill in all required fields (Name, Email, Phone).');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>${isTr ? 'WhatsApp\'a Yönlendiriliyor...' : 'Opening WhatsApp...'}</span>`;

    // Construct formatted WhatsApp message
    let text = '';
    if (isTr) {
      text = `*EYCODEX Yeni Proje & İletişim Talebi*%0A%0A` +
             `👤 *Ad Soyad:* ${name}%0A` +
             `📧 *E-Posta:* ${email}%0A` +
             `📱 *WhatsApp:* ${phone}%0A` +
             (company ? `🏢 *Şirket/Marka:* ${company}%0A` : '') +
             `🛠️ *İlgilenilen Hizmetler:* ${service}%0A` +
             (message ? `📝 *Proje Detayları:*%0A${message}%0A%0A` : '%0A') +
             `Web siteniz üzerinden teklif ve detayları görüşmek için iletişime geçiyorum.`;
    } else {
      text = `*EYCODEX New Project & Inquiry*%0A%0A` +
             `👤 *Name:* ${name}%0A` +
             `📧 *Email:* ${email}%0A` +
             `📱 *WhatsApp:* ${phone}%0A` +
             (company ? `🏢 *Company:* ${company}%0A` : '') +
             `🛠️ *Services of Interest:* ${service}%0A` +
             (message ? `📝 *Project Details:*%0A${message}%0A%0A` : '%0A') +
             `I would like to discuss my project details and get a quotation.`;
    }

    const waUrl = `https://api.whatsapp.com/send?phone=905427170040&text=${text}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      updateAllMultiselects();

      showToast(isTr ? '✅ Talebiniz WhatsApp\'a aktarıldı! Açılan sohbetten mesajı gönderebilirsiniz.' : '✅ Transferred to WhatsApp! You can now send your message.');
    }, 600);
  });
}

// 8. Legal Modals (KVKK, Privacy, Terms)
function openLegalModal(type) {
  const modal = document.getElementById('legal-modal');
  const modalBody = document.getElementById('legal-modal-body');
  if (!modal || !modalBody) return;

  const isTr = (typeof currentLang !== 'undefined' && currentLang === 'tr');

  let title = '';
  let content = '';

  if (type === 'kvkk') {
    title = isTr ? 'KVKK ve Kişisel Verilerin Korunması' : 'Data Protection Policy (KVKK/GDPR)';
    content = isTr 
      ? '<p>EYCODEX olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kullanıcılarımızın kişisel verilerinin güvenliğine en üst düzeyde önem vermekteyiz. Toplanan veriler yalnızca iletişim taleplerinizi yanıtlamak ve teklif süreçlerini yönetmek amacıyla işlenmektedir.</p><br><p>Kişisel verileriniz hiçbir şart altında üçüncü şahıs veya kurumlarla paylaşılmaz ve şifreli sunucularda muhafaza edilir.</p>'
      : '<p>At EYCODEX, in accordance with the relevant data protection laws and GDPR principles, we hold user privacy and data security in the highest regard. Collected data is processed strictly for quotation and consultation requests.</p><br><p>Your personal data is never shared with third parties and is stored securely in encrypted environments.</p>';
  } else if (type === 'privacy') {
    title = isTr ? 'Gizlilik Politikası' : 'Privacy Policy';
    content = isTr
      ? '<p>Bu gizlilik politikası, EYCODEX web sitesini ziyaret ettiğinizde sağladığınız bilgilerin nasıl korunduğunu açıklamaktadır. Web sitemiz, ziyaretçi deneyimini iyileştirmek için sadece temel çerezleri (dil tercihi vb.) kullanmaktadır.</p>'
      : '<p>This Privacy Policy outlines how EYCODEX protects and uses any information that you provide when using this website. We only utilize essential cookies for functional user experience such as language preferences.</p>';
  } else if (type === 'terms') {
    title = isTr ? 'Hizmet Şartları' : 'Terms of Service';
    content = isTr
      ? '<p>EYCODEX tarafından sunulan web tasarım ve yazılım hizmetleri, taraflar arasında imzalanan özel sözleşme ve teknik şartnamelere tabidir. Tüm projeler uluslararası W3C ve güvenlik standartlarına uygun olarak geliştirilir.</p>'
      : '<p>All digital agency and software development services rendered by EYCODEX are governed by bespoke project agreements and international engineering standards.</p>';
  }

  modalBody.innerHTML = `
    <h2 style="font-size: 1.75rem; margin-bottom: 1rem; color: #fff;">${title}</h2>
    <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8;">${content}</div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// 9. Özel Gün ve Anma Barları (29 Ekim Cumhuriyet Bayramı & 10 Kasım Atatürk'ü Anma)
function initSpecialDaysBanners() {
  const republicBanner = document.getElementById('republicDayBanner');
  const memorialBanner = document.getElementById('ataturkMemorialBanner');
  if (!republicBanner && !memorialBanner) return;

  const now = new Date();
  const currentYear = now.getFullYear();

  // 1. 29 Ekim Cumhuriyet Bayramı (Ay indeksi: 9 = Ekim)
  const republicStart = new Date(currentYear, 9, 28, 0, 0, 0, 0);
  const republicExpire = new Date(currentYear, 9, 29, 23, 59, 59, 999);

  // 2. 10 Kasım Atatürk'ü Anma (Ay indeksi: 10 = Kasım) - Sadece 10 Kasım gününde yayınlanır
  const memorialStart = new Date(currentYear, 10, 10, 0, 0, 0, 0);
  const memorialExpire = new Date(currentYear, 10, 10, 23, 59, 59, 999);

  // Canlı Önizleme Modu Algılama (URL, Hash, SessionStorage):
  const fullHref = (window.location.href || '').toLowerCase();
  let forceBanner = null;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    forceBanner = urlParams.get('banner');
  } catch (e) { }

  if (!forceBanner) {
    if (fullHref.includes('10kasim') || fullHref.includes('10-kasim')) {
      forceBanner = '10kasim';
    } else if (fullHref.includes('29ekim') || fullHref.includes('29-ekim')) {
      forceBanner = '29ekim';
    } else {
      forceBanner = sessionStorage.getItem('eycodex_preview_banner');
    }
  }

  if (fullHref.includes('banner=off') || fullHref.includes('#off')) {
    forceBanner = null;
    sessionStorage.removeItem('eycodex_preview_banner');
  } else if (forceBanner) {
    sessionStorage.setItem('eycodex_preview_banner', forceBanner);
  }

  let activeBanner = null;
  let activeExpire = null;

  if (forceBanner === '10kasim' && memorialBanner) {
    activeBanner = memorialBanner;
    activeExpire = memorialExpire;
  } else if (forceBanner === '29ekim' && republicBanner) {
    activeBanner = republicBanner;
    activeExpire = republicExpire;
  } else if (now.getTime() >= memorialStart.getTime() && now.getTime() <= memorialExpire.getTime() && memorialBanner) {
    activeBanner = memorialBanner;
    activeExpire = memorialExpire;
  } else if (now.getTime() >= republicStart.getTime() && now.getTime() <= republicExpire.getTime() && republicBanner) {
    activeBanner = republicBanner;
    activeExpire = republicExpire;
  }

  function activateBanner(bannerToActivate) {
    if (republicBanner) republicBanner.style.display = 'none';
    if (memorialBanner) memorialBanner.style.display = 'none';

    if (!bannerToActivate) {
      document.body.classList.remove('has-top-banner');
      document.documentElement.style.removeProperty('--banner-height');
      return;
    }

    bannerToActivate.style.display = 'flex';
    document.body.classList.add('has-top-banner');

    const syncHeight = () => {
      if (bannerToActivate && bannerToActivate.offsetHeight) {
        document.documentElement.style.setProperty('--banner-height', bannerToActivate.offsetHeight + 'px');
      }
    };

    syncHeight();
    window.addEventListener('resize', syncHeight);

    const bannerImg = bannerToActivate.querySelector('.celebration-banner-img');
    if (bannerImg) {
      if (bannerImg.complete) {
        syncHeight();
      } else {
        bannerImg.addEventListener('load', syncHeight, { once: true });
      }
    }
    setTimeout(syncHeight, 100);
    setTimeout(syncHeight, 400);
  }

  // Global kontroller (konsol veya harici testler için)
  window.show10KasimBanner = () => {
    sessionStorage.setItem('eycodex_preview_banner', '10kasim');
    activateBanner(memorialBanner);
  };
  window.show29EkimBanner = () => {
    sessionStorage.setItem('eycodex_preview_banner', '29ekim');
    activateBanner(republicBanner);
  };
  window.hideSpecialBanners = () => {
    sessionStorage.removeItem('eycodex_preview_banner');
    activateBanner(null);
  };

  activateBanner(activeBanner);

  // Sayfa açıkken süre dolduğunda otomatik anında kaldır
  if (activeExpire && !forceBanner) {
    const msUntilExpire = activeExpire.getTime() - now.getTime();
    if (msUntilExpire > 0 && msUntilExpire < 2147483647) {
      setTimeout(() => {
        activateBanner(null);
      }, msUntilExpire);
    }
  }

  // Yerel geliştirme veya test modunda tek tıkla test paneli
  const isLocalDev = window.location.protocol === 'file:' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    fullHref.includes('preview') ||
    forceBanner !== null;

  if (isLocalDev && !document.getElementById('specialDaysDevToolbar')) {
    const toolbar = document.createElement('aside');
    toolbar.id = 'specialDaysDevToolbar';
    toolbar.setAttribute('aria-label', 'Özel Gün Banner Test Paneli');
    toolbar.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 99999;
      background: rgba(11, 14, 26, 0.95);
      border: 1px solid rgba(0, 242, 254, 0.4);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 30px;
      padding: 6px 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 13px;
      color: #e2e8f0;
    `;

    toolbar.innerHTML = `
      <span style="font-weight: 600; color: #00f2fe; display: flex; align-items: center; gap: 4px;">
        ✦ Banner Test:
      </span>
      <button type="button" id="btnTest10Kasim" style="background: ${activeBanner === memorialBanner ? '#22c55e' : 'rgba(255,255,255,0.1)'}; color: #fff; border: 1px solid rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 14px; cursor: pointer; font-size: 12px; font-weight: 600; transition: all 0.2s;">
        10 Kasım
      </button>
      <button type="button" id="btnTest29Ekim" style="background: ${activeBanner === republicBanner ? '#ef4444' : 'rgba(255,255,255,0.1)'}; color: #fff; border: 1px solid rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 14px; cursor: pointer; font-size: 12px; font-weight: 600; transition: all 0.2s;">
        29 Ekim
      </button>
      <button type="button" id="btnTestOff" style="background: rgba(255,255,255,0.06); color: #94a3b8; border: 1px solid rgba(255,255,255,0.1); padding: 5px 10px; border-radius: 14px; cursor: pointer; font-size: 12px; transition: all 0.2s;">
        ✕ Kapat
      </button>
    `;

    document.body.appendChild(toolbar);

    const b10 = document.getElementById('btnTest10Kasim');
    const b29 = document.getElementById('btnTest29Ekim');
    const bOff = document.getElementById('btnTestOff');

    const updateButtonStyles = (activeType) => {
      if (b10) b10.style.background = activeType === '10' ? '#22c55e' : 'rgba(255,255,255,0.1)';
      if (b29) b29.style.background = activeType === '29' ? '#ef4444' : 'rgba(255,255,255,0.1)';
    };

    if (b10) {
      b10.addEventListener('click', () => {
        window.show10KasimBanner();
        updateButtonStyles('10');
      });
    }
    if (b29) {
      b29.addEventListener('click', () => {
        window.show29EkimBanner();
        updateButtonStyles('29');
      });
    }
    if (bOff) {
      bOff.addEventListener('click', () => {
        window.hideSpecialBanners();
        updateButtonStyles('none');
      });
    }
  }
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  observeReveals();
  initCounters();
  initFaq();
  initNav();
  initCustomMultiSelect();
  initContactForm();
  initSpecialDaysBanners();

  // Set dynamic year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
