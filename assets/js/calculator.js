/* ==========================================================================
   EYCODEX DIGITAL AGENCY - INTERACTIVE PROJECT COST & TIMELINE CALCULATOR
   ========================================================================== */

let currentCurrency = 'TRY';

const currencySymbols = {
  TRY: '₺',
  USD: '$',
  EUR: '€'
};

const currencyRates = {
  TRY: 1,
  USD: 1 / 34,
  EUR: 1 / 37
};

const pricingData = {
  types: {
    corporate: { nameTr: 'Kurumsal Web Sitesi', nameEn: 'Corporate Website', baseTry: 12500, days: 5 },
    ecommerce: { nameTr: 'E-Ticaret & Satış', nameEn: 'E-Commerce Store', baseTry: 24000, days: 10 },
    webapp: { nameTr: 'Özel Web Uygulaması / SaaS', nameEn: 'Custom Web Application', baseTry: 36000, days: 16 },
    landing: { nameTr: 'Landing Page / Tek Sayfa', nameEn: 'Landing Page', baseTry: 8000, days: 3 }
  },
  scales: {
    scale1: { nameTr: '1 - 5 Sayfa', nameEn: '1 - 5 Pages', addTry: 0, addDays: 0 },
    scale2: { nameTr: '6 - 15 Sayfa', nameEn: '6 - 15 Pages', addTry: 5000, addDays: 3 },
    scale3: { nameTr: '15+ Sayfa / Sınırsız', nameEn: '15+ Pages / Unlimited', addTry: 12000, addDays: 6 }
  },
  addons: {
    addon_i18n: { nameTr: 'Çoklu Dil Desteği', nameEn: 'Multi-Language Support', addTry: 4000, addDays: 2 },
    addon_seo: { nameTr: 'Gelişmiş Global SEO', nameEn: 'Advanced Global SEO', addTry: 5500, addDays: 2 },
    addon_cms: { nameTr: 'Özel Yönetim Paneli (CMS)', nameEn: 'Custom CMS Panel', addTry: 6000, addDays: 3 },
    addon_speed: { nameTr: 'Ultra Hız & Güvenlik', nameEn: 'Ultra Speed & Security', addTry: 3500, addDays: 1 },
    addon_support: { nameTr: '1 Yıl Öncelikli Destek', nameEn: '1-Year Priority Support', addTry: 4500, addDays: 0 }
  }
};

function calculateEstimate() {
  const selectedTypeInput = document.querySelector('input[name="project_type"]:checked');
  const selectedScaleInput = document.querySelector('input[name="project_scale"]:checked');
  const selectedAddons = document.querySelectorAll('input[name="calc_addon"]:checked');

  const typeKey = selectedTypeInput ? selectedTypeInput.value : 'corporate';
  const scaleKey = selectedScaleInput ? selectedScaleInput.value : 'scale1';

  let totalTry = pricingData.types[typeKey].baseTry;
  let totalDays = pricingData.types[typeKey].days;

  // Add scale
  totalTry += pricingData.scales[scaleKey].addTry;
  totalDays += pricingData.scales[scaleKey].addDays;

  // Add checked addons
  const activeAddonNames = [];
  selectedAddons.forEach(cb => {
    const addonKey = cb.value;
    if (pricingData.addons[addonKey]) {
      totalTry += pricingData.addons[addonKey].addTry;
      totalDays += pricingData.addons[addonKey].addDays;
      const isTr = (typeof currentLang !== 'undefined' && currentLang === 'tr');
      activeAddonNames.push(isTr ? pricingData.addons[addonKey].nameTr : pricingData.addons[addonKey].nameEn);
    }
  });

  // Currency conversion
  let finalPrice = totalTry;
  if (currentCurrency === 'USD') {
    finalPrice = Math.round(totalTry * currencyRates.USD);
  } else if (currentCurrency === 'EUR') {
    finalPrice = Math.round(totalTry * currencyRates.EUR);
  }

  return {
    totalPrice: finalPrice,
    totalDays: totalDays,
    typeKey: typeKey,
    scaleKey: scaleKey,
    addons: activeAddonNames,
    currencySymbol: currencySymbols[currentCurrency]
  };
}

function updateCalculatorDisplay() {
  const est = calculateEstimate();
  const priceDisplay = document.getElementById('calc-price-value');
  const timeDisplay = document.getElementById('calc-time-value');

  if (priceDisplay) {
    priceDisplay.textContent = `${est.currencySymbol}${est.totalPrice.toLocaleString()}`;
  }

  if (timeDisplay) {
    timeDisplay.textContent = `${est.totalDays}`;
  }
}

function sendQuoteToWhatsApp() {
  const est = calculateEstimate();
  const isTr = (typeof currentLang !== 'undefined' && currentLang === 'tr');

  const typeName = isTr ? pricingData.types[est.typeKey].nameTr : pricingData.types[est.typeKey].nameEn;
  const scaleName = isTr ? pricingData.scales[est.scaleKey].nameTr : pricingData.scales[est.scaleKey].nameEn;
  const addonsList = est.addons.length > 0 ? est.addons.join(', ') : (isTr ? 'Temel Paket' : 'Core Package');

  let text = '';
  if (isTr) {
    text = `Merhaba EYCODEX Ekibi! Web sitenizdeki interaktif hesaplayıcıdan bir proje teklifi oluşturdum:%0A%0A` +
           `🚀 *Proje Türü:* ${typeName}%0A` +
           `📄 *Ölçek:* ${scaleName}%0A` +
           `✨ *Ekstra Özellikler:* ${addonsList}%0A` +
           `💰 *Tahmini Bütçe:* ${est.currencySymbol}${est.totalPrice.toLocaleString()}%0A` +
           `⏱️ *Teslim Süresi:* ~${est.totalDays} İş Günü%0A%0A` +
           `Bu proje hakkında detaylı görüşmek ve başlatmak istiyorum.`;
  } else {
    text = `Hello EYCODEX Team! I configured a project estimate on your website calculator:%0A%0A` +
           `🚀 *Project Type:* ${typeName}%0A` +
           `📄 *Scale:* ${scaleName}%0A` +
           `✨ *Selected Features:* ${addonsList}%0A` +
           `💰 *Estimated Budget:* ${est.currencySymbol}${est.totalPrice.toLocaleString()}%0A` +
           `⏱️ *Estimated Delivery:* ~${est.totalDays} Business Days%0A%0A` +
           `I'd like to discuss and kick off this project.`;
  }

  // WhatsApp link (WhatsApp web / mobile compatible)
  const phone = "905427170040";
  window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`, '_blank');
}

function transferQuoteToForm() {
  const est = calculateEstimate();
  const isTr = (typeof currentLang !== 'undefined' && currentLang === 'tr');

  const typeName = isTr ? pricingData.types[est.typeKey].nameTr : pricingData.types[est.typeKey].nameEn;
  const scaleName = isTr ? pricingData.scales[est.scaleKey].nameTr : pricingData.scales[est.scaleKey].nameEn;
  const addonsList = est.addons.length > 0 ? est.addons.join(', ') : (isTr ? 'Temel Paket' : 'Core Package');

  // Check matching service chip
  const chips = document.querySelectorAll('.service-chip-input');
  chips.forEach(chip => {
    if (chip.value === est.typeKey) {
      chip.checked = true;
    }
  });

  // Sync custom multiselect UI
  if (typeof updateAllMultiselects === 'function') {
    updateAllMultiselects();
  }

  if (messageArea) {
    messageArea.value = isTr 
      ? `[Hesaplayıcıdan Aktarıldı]\nProje Türü: ${typeName}\nÖlçek: ${scaleName}\nSeçilen Özellikler: ${addonsList}\nTahmini Bütçe: ${est.currencySymbol}${est.totalPrice.toLocaleString()} (~${est.totalDays} İş Günü)\n\nDetaylı Notlarım: `
      : `[Transferred from Calculator]\nProject: ${typeName}\nScale: ${scaleName}\nAddons: ${addonsList}\nEstimated Budget: ${est.currencySymbol}${est.totalPrice.toLocaleString()} (~${est.totalDays} Days)\n\nAdditional Notes: `;
  }

  // Smooth scroll to contact
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    if (typeof showToast === 'function') {
      showToast(isTr ? 'Hesaplayıcı seçimleriniz iletişim formuna aktarıldı!' : 'Calculator estimate transferred to contact form!');
    }
  }
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Inputs change
  document.querySelectorAll('input[name="project_type"], input[name="project_scale"], input[name="calc_addon"]').forEach(input => {
    input.addEventListener('change', updateCalculatorDisplay);
  });

  // Currency picker
  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.curr-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCurrency = e.target.getAttribute('data-curr');
      updateCalculatorDisplay();
    });
  });

  // Buttons
  const waBtn = document.getElementById('calc-btn-whatsapp');
  if (waBtn) waBtn.addEventListener('click', sendQuoteToWhatsApp);

  const formBtn = document.getElementById('calc-btn-form');
  if (formBtn) formBtn.addEventListener('click', transferQuoteToForm);

  updateCalculatorDisplay();
});
