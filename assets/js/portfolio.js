/* ==========================================================================
   EYCODEX DIGITAL AGENCY - PORTFOLIO & CASE STUDIES ENGINE (portfolio.js)
   ========================================================================== */

const portfolioProjects = [
  {
    id: 'serap-hair',
    category: 'beauty global',
    title: 'Serap Hair Design Studio .de',
    domain: 'seraphairdesignstudio.de',
    liveUrl: 'https://www.seraphairdesignstudio.de/',
    summaryTr: 'Almanya pazarı için özel olarak geliştirilmiş, Almanca ve Türkçe dilli, Google Almanya SEO uyumlu güzellik & kuaför stüdyosu.',
    summaryEn: 'Custom beauty studio website developed specifically for the German market (.de) in German and Turkish with local SEO.',
    img: 'assets/images/projects/serap-preview.png',
    mobileImg: 'assets/images/projects/serap-mobil.jpg',
    logo: 'assets/images/projects/serap-hair-logo.png',
    locationTr: 'Almanya (Germany .de)',
    locationEn: 'Germany (.de)',
    tags: ['Almanya (.de)', 'Güzellik Stüdyosu', 'seraphairdesignstudio.de', 'Google Maps SEO'],
    metric: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg> Google 1. Sayfa (Almanya)',
    fullDescTr: 'Almanya pazarındaki müşteriler için tasarlanan Serap Hair Design Studio, yüksek hızlı sunucu altyapısı ve yerelleştirilmiş SEO stratejisi ile organik müşteri kazanımını 3 katına çıkardı.',
    fullDescEn: 'Tailored for the German market with high-speed cloud infrastructure and localized SEO, tripling organic inquiries.',
    tech: 'Bespoke HTML5, CSS3, Schema.org LocalBusiness, WebP Optimization'
  },
  {
    id: 'erm-auto',
    category: 'automotive',
    title: 'ERM Garage Özel Servis & Ekspertiz',
    domain: 'ermgarage.com',
    liveUrl: 'https://ermgarage.com/',
    summaryTr: 'Otomotiv bakım ve ekspertiz sektörü için acil yol yardım ve servis randevu modüllü kurumsal web platformu.',
    summaryEn: 'Corporate automotive maintenance and inspection platform with emergency roadside assistance module.',
    img: 'assets/images/projects/erm-preview.png',
    mobileImg: 'assets/images/projects/erm-mobil.jpg',
    logo: 'assets/images/projects/erm-auto-logo.png',
    locationTr: 'Türkiye',
    locationEn: 'Turkey',
    tags: ['ermgarage.com', 'Otomotiv & Servis', 'Acil Yol Yardım', 'Hızlı Arama'],
    metric: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 18"/><polyline points="17 6 23 6 23 12"/></svg> +180% Doğrudan Arama',
    fullDescTr: 'Acil durumlarda tek tıkla doğrudan arama ve konum gönderme özellikleri barındıran, sağlam ve kurumsal kimliğe sahip web sitesi.',
    fullDescEn: 'Features one-touch direct calling and live geolocation sharing for emergencies, paired with robust corporate branding.',
    tech: 'CSS3, JavaScript, AutoService Schema, Speed Caching'
  },
  {
    id: 'hanimeli',
    category: 'beauty',
    title: 'Hanımeli Güzellik Merkezi',
    domain: 'hanimeliguzellikmerkezi.com',
    liveUrl: 'https://www.hanimeliguzellikmerkezi.com/',
    summaryTr: 'Bölgesel liderlik hedefleyen güzellik merkezi için yerel SEO odaklı, kullanıcı dostu kurumsal web sitesi.',
    summaryEn: 'Local SEO optimized corporate platform for a regional beauty center with intuitive navigation.',
    img: 'assets/images/projects/hanimeli-preview.png',
    mobileImg: 'assets/images/projects/hanimeli-mobil.jpg',
    logo: 'assets/images/projects/hanimeli-logo.png',
    locationTr: 'Türkiye',
    locationEn: 'Turkey',
    tags: ['hanimeliguzellikmerkezi.com', 'Güzellik & Estetik', 'Yerel SEO', 'Google Harita'],
    metric: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Bölgesel SEO Lideri',
    fullDescTr: 'Google Haritalar ve yerel aramalarda 1. sırada yer almayı sağlayan teknik SEO altyapısı ve interaktif hizmet menüsü.',
    fullDescEn: 'Equipped with technical local SEO architecture to rank #1 on regional Google queries and maps.',
    tech: 'HTML5 Semantic, Google Maps API, Fast DNS'
  },
  {
    id: 'uzmandil',
    category: 'apps global corporate',
    title: 'UzmanDil & UzmanYDS Online Eğitim & SaaS Platformu',
    domain: 'uzmandil.com',
    liveUrl: 'https://uzmandil.com/',
    summaryTr: 'Türkiye ve yurt dışındaki öğrenciler için interaktif dil eğitimi, seviye tespit sınavları, öğrenci paneli ve UzmanYDS SaaS web/mobil uygulaması.',
    summaryEn: 'Interactive language learning portal, placement exams, and UzmanYDS SaaS web/mobile application for global students.',
    img: 'assets/images/projects/UzmanDil.png',
    mobileImg: 'assets/images/projects/uzmanyds-uygulama.jpeg',
    logo: 'assets/images/projects/ud_logo.svg',
    locationTr: 'Türkiye & Global (uzmandil.com)',
    locationEn: 'Turkey & Global (uzmandil.com)',
    tags: ['uzmandil.com', 'UzmanYDS Uygulama', 'Online Eğitim & SaaS', 'Sınav & Panel', 'Google SEO'],
    metric: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Lighthouse 100/100',
    fullDescTr: 'uzmandil.com ve UzmanYDS için özel olarak geliştirilen bu web & mobil SaaS platformu; öğrenci çalışma paneli, interaktif seviye tespit sınavları, kelime/gramer modülleri, canlı ders odaları ve güvenli küresel ödeme altyapısı ile donatılmıştır.',
    fullDescEn: 'Bespoke ed-tech and web application architecture engineered for uzmandil.com & UzmanYDS featuring student study dashboard, interactive exams, vocabulary/grammar modules, and secure international payments.',
    tech: 'Next.js, Node.js API, Video Streaming, PostgreSQL, Stripe/İyzico, SEO Schema'
  },
  {
    id: 'seda-beslenme',
    category: 'corporate',
    title: 'Seda Beslenme Merkezi',
    domain: 'sedabeslenmemerkezi.com',
    liveUrl: 'https://sedabeslenmemerkezi.com/',
    summaryTr: 'Kişiye özel beslenme danışmanlığı, vücut analizi ve online takip modülleri içeren modern sağlık platformu.',
    summaryEn: 'Modern health and nutrition platform featuring bespoke wellness consulting and client tracking.',
    img: 'assets/images/projects/seda-preview.png',
    mobileImg: 'assets/images/projects/seda-mobil.jpg',
    logo: 'assets/images/projects/seda-beslenme-logo.png',
    locationTr: 'Türkiye',
    locationEn: 'Turkey',
    tags: ['sedabeslenmemerkezi.com', 'Beslenme & Diyet', 'Online Danışmanlık', 'SEO'],
    metric: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> %99.4 Kullanıcı Beğenisi',
    fullDescTr: 'Danışanların online randevu almasını, başarı hikayelerini incelemesini ve tek tıkla iletişime geçmesini sağlayan ferah ve modern web arayüzü.',
    fullDescEn: 'Intuitive interface allowing clients to book consultations, explore client transformations, and connect directly.',
    tech: 'HTML5, Modern CSS, Form Validation, Fast Server'
  },
  {
    id: 'tunc-teknik',
    category: 'corporate',
    title: 'Tunç Teknik Servis & Güvenlik',
    domain: 'tuncteknikservis.com',
    liveUrl: 'https://tuncteknikservis.com/',
    summaryTr: 'Beyaz eşya servisi ve güvenlik kamerası montajı için hızlı arama ve servis talep odaklı web platformu.',
    summaryEn: 'Fast service request and security camera installation corporate portal.',
    img: 'assets/images/projects/tunc-preview.png',
    mobileImg: 'assets/images/projects/tunc-mobil.jpg',
    logo: 'assets/images/projects/tunc-teknik-logo.png',
    locationTr: 'Türkiye',
    locationEn: 'Turkey',
    tags: ['tuncteknikservis.com', 'Teknik Servis', 'Kamera Montaj', 'Acil Çağrı'],
    metric: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> 7/24 Kesintisiz Erişim',
    fullDescTr: 'Müşterilerin arıza bildirimlerini ve servis taleplerini anında iletebildiği, kurumsal ve hızlı web sitesi.',
    fullDescEn: 'Corporate platform enabling clients to register repair requests and access emergency technicians.',
    tech: 'Responsive Layout, Google Click-to-Call, Schema.org'
  }
];

function createDualDeviceMockup(project, isModal = false) {
  const domain = project.domain || 'eycodex.com';
  const liveUrl = project.liveUrl || 'https://' + domain;
  const isTr = (typeof currentLang !== 'undefined' && currentLang === 'tr');

  return `
    <div class="mockup-dual-stage ${isModal ? 'modal-dual-stage' : ''}">
      <!-- Complete Laptop (Dizüstü Bilgisayar) -->
      <div class="mockup-laptop">
        <div class="laptop-lid">
          <div class="laptop-camera"></div>
          <div class="laptop-screen">
            <div class="laptop-browser-bar">
              <div class="browser-dots">
                <span class="b-dot dot-r"></span>
                <span class="b-dot dot-y"></span>
                <span class="b-dot dot-g"></span>
              </div>
              <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="browser-url-pill browser-url-link" onclick="event.stopPropagation();" title="${isTr ? 'Canlı Siteyi Yeni Sekmede Aç: ' + domain : 'Visit Live Site: ' + domain}">
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>${domain}</span>
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
            <div class="laptop-viewport">
              <img src="${project.img}" alt="${project.title} Desktop View" class="laptop-screen-img" loading="lazy" />
              <div class="screen-glare"></div>
            </div>
          </div>
        </div>
        <div class="laptop-hinge"></div>
        <div class="laptop-base">
          <div class="laptop-base-top">
            <div class="laptop-notch"></div>
          </div>
          <div class="laptop-base-bottom"></div>
        </div>
        <div class="laptop-shadow"></div>
      </div>

      <!-- Complete Smartphone (Birebir Gerçek Mobil Görünüm) -->
      <div class="mockup-phone">
        <div class="phone-body">
          <div class="phone-island"></div>
          <div class="phone-screen">
            <img src="${project.mobileImg}" alt="${project.title} Mobil Görünüm" class="phone-screen-img" loading="lazy" />
            <div class="phone-glare"></div>
          </div>
          <div class="phone-home-indicator"></div>
        </div>
        <div class="phone-shadow"></div>
      </div>
    </div>
  `;
}

function renderPortfolioCards(filter = 'all') {
  const container = document.getElementById('portfolio-grid-container');
  if (!container) return;

  const isTr = (typeof currentLang !== 'undefined' && currentLang === 'tr');

  const filtered = portfolioProjects.filter(p => {
    if (filter === 'all') return true;
    return p.category.includes(filter);
  });

  container.innerHTML = filtered.map(p => {
    const summary = isTr ? p.summaryTr : p.summaryEn;
    const location = isTr ? p.locationTr : p.locationEn;
    const tagsHtml = p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    const mockupHtml = createDualDeviceMockup(p, false);
    const liveUrl = p.liveUrl || 'https://' + p.domain;

    return `
      <div class="project-card reveal" data-project-id="${p.id}">
        <div class="project-img-wrap">
          ${mockupHtml}
          <div class="project-brand-badge">
            <img src="${p.logo}" alt="" style="width: 20px; height: 20px; object-fit: contain; border-radius: 50%;" />
            <span>EYCODEX Case</span>
          </div>
          <div class="project-location-badge">
            ${location}
          </div>
        </div>
        <div class="project-content">
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${summary}</p>
          <div class="project-footer">
            <span class="project-metric">${p.metric}</span>
            <div class="project-actions">
              <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="project-live-btn" onclick="event.stopPropagation();" title="${isTr ? 'Canlı Siteyi Ziyaret Et' : 'Visit Live Website'}">
                <span>${isTr ? 'Canlı Site' : 'Live Site'}</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <span class="project-view-btn">
                ${isTr ? 'İncele' : 'View'} 
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-attach card click to modal
  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });

  // Re-trigger reveal animation observer if main.js exists
  if (typeof observeReveals === 'function') {
    observeReveals();
  }
  // Ensure cards become visible
  setTimeout(() => {
    container.querySelectorAll('.project-card').forEach(card => card.classList.add('revealed'));
  }, 100);
}

function openProjectModal(projectId) {
  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('portfolio-modal');
  const modalContent = document.getElementById('portfolio-modal-body');
  if (!modal || !modalContent) return;

  const isTr = (typeof currentLang !== 'undefined' && currentLang === 'tr');
  const fullDesc = isTr ? project.fullDescTr : project.fullDescEn;
  const location = isTr ? project.locationTr : project.locationEn;
  const tagsHtml = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
  const modalMockupHtml = createDualDeviceMockup(project, true);
  const liveUrl = project.liveUrl || 'https://' + project.domain;

  modalContent.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div class="modal-device-stage">
        ${modalMockupHtml}
      </div>
      <div style="display: flex; justify-content: center; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
        <img src="${project.logo}" alt="" style="height: 36px; width: auto; object-fit: contain;" />
        <span class="badge-tag">${location}</span>
        <span class="badge-tag badge-emerald" style="display: inline-flex; align-items: center; gap: 5px;">${project.metric}</span>
      </div>
      <h2 style="font-size: 1.75rem; margin-bottom: 0.5rem; color: #fff;">${project.title}</h2>
      <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem;">
        ${tagsHtml}
      </div>
    </div>
    <div style="font-size: 1rem; color: var(--text-secondary); line-height: 1.75; margin-bottom: 1.5rem;">
      <h4 style="color: #fff; margin-bottom: 0.5rem;">${isTr ? 'Proje Hakkında:' : 'About Project:'}</h4>
      <p>${fullDesc}</p>
    </div>
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.75rem;">
      <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-bottom: 0.25rem;">
        ${isTr ? 'Kullanılan Teknolojiler' : 'Technologies Used'}
      </div>
      <div style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--cyan);">
        ${project.tech}
      </div>
    </div>
    <div class="modal-actions-grid">
      <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline modal-action-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        <span>${isTr ? 'Canlı Siteyi Ziyaret Et' : 'Visit Live Website'}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
      <button class="btn btn-primary modal-action-btn" onclick="closeModal('portfolio-modal'); document.getElementById('contact').scrollIntoView({behavior: 'smooth'});">
        <span>${isTr ? 'Benzer Proje Başlat' : 'Start Similar Project'}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
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

function initPortfolio() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      renderPortfolioCards(filter);
    });
  });

  // Modal backdrop click to close
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  renderPortfolioCards('all');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
