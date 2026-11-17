/**
 * UMAR DENTAL CLINIC - Main JavaScript Application
 * Tagline: "Your Smile is Important to Us"
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initNavScrollSpy();
  initServicesFilter();
  initBeforeAfterSlider();
  initAppointmentForm();
  initScrollTop();
  initServiceModals();
  initEditableTooltips();
});

/* ==========================================================================
   1. Sticky Header & Topbar Shrink
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. Mobile Hamburger Navigation
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav .btn');

  if (!menuToggle || !mobileNav) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !mobileNav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      mobileNav.classList.add('open');
      if (mobileBackdrop) mobileBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNav.classList.remove('open');
      if (mobileBackdrop) mobileBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  menuToggle.addEventListener('click', () => toggleMenu());
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => toggleMenu(false));
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   3. Navigation ScrollSpy
   ========================================================================== */
function initNavScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   4. Services Filter Tabs & Auto-booking
   ========================================================================== */
function initServicesFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // "Book This Service" quick action links
  const bookBtns = document.querySelectorAll('.btn-book-service');
  const serviceSelect = document.getElementById('service-select');

  bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service');
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
      const appointmentSec = document.getElementById('appointment');
      if (appointmentSec) {
        appointmentSec.scrollIntoView({ behavior: 'smooth' });
        // Highlight dropdown briefly
        if (serviceSelect) {
          serviceSelect.focus();
          serviceSelect.style.borderColor = 'var(--color-med-blue)';
          setTimeout(() => {
            serviceSelect.style.borderColor = '';
          }, 1500);
        }
      }
    });
  });
}

/* ==========================================================================
   5. Interactive Before & After Smile Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.querySelector('.before-after-container');
  if (!container) return;

  const afterImageWrapper = container.querySelector('.ba-image-after');
  const sliderHandle = container.querySelector('.ba-slider-handle');
  if (!afterImageWrapper || !sliderHandle) return;

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;

    // Constrain percentage between 5% and 95%
    percentage = Math.max(5, Math.min(95, percentage));

    afterImageWrapper.style.width = `${percentage}%`;
    sliderHandle.style.left = `${percentage}%`;
  }

  // Mouse events
  sliderHandle.addEventListener('mousedown', () => { isDragging = true; });
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  // Touch events for mobile phones and tablets
  sliderHandle.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });
}

/* ==========================================================================
   6. Appointment Booking System (Demo Mode with WhatsApp & Calendar)
   ========================================================================== */
function initAppointmentForm() {
  const form = document.getElementById('appointment-form');
  const modal = document.getElementById('confirmation-modal');
  const closeBtn = document.getElementById('btn-close-confirm-modal');
  const dismissBtn = document.getElementById('btn-dismiss-modal');
  const dateInput = document.getElementById('booking-date');

  // Prevent past dates
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form['patient-name'].value.trim();
    const phone = form['patient-phone'].value.trim();
    const date = form['booking-date'].value;
    const time = form['booking-time'].value;
    const service = form['service-select'].value;
    const message = form['patient-message'].value.trim();

    if (!name || !phone || !date || !service) {
      alert('Please fill in all required fields (Name, Phone, Date, and Service).');
      return;
    }

    // Generate random reference token
    const token = 'UDC-' + Math.floor(1000 + Math.random() * 9000);

    // Update modal contents
    document.getElementById('modal-ref-id').textContent = token;
    document.getElementById('modal-patient-name').textContent = name;
    document.getElementById('modal-patient-phone').textContent = phone;
    document.getElementById('modal-service').textContent = service;
    document.getElementById('modal-date').textContent = `${date} (${time})`;

    // Configure WhatsApp button
    const waBtn = document.getElementById('modal-btn-whatsapp');
    if (waBtn) {
      const waText = encodeURIComponent(
        `Hello Umar Dental Clinic,\n\nI would like to request an appointment:\n- Ref: ${token}\n- Patient: ${name}\n- Phone: ${phone}\n- Service: ${service}\n- Preferred Date: ${date} (${time})\n- Note: ${message || 'None'}\n\nPlease confirm availability. Thank you!`
      );
      // Using clinic phone from worksheet / prompt
      waBtn.href = `https://wa.me/923334445440?text=${waText}`;
    }

    // Configure Calendar .ics download
    const calBtn = document.getElementById('modal-btn-calendar');
    if (calBtn) {
      calBtn.onclick = () => {
        downloadIcs(name, service, date, time);
      };
    }

    // Open confirmation modal
    if (modal) {
      modal.classList.add('active');
    }

    // Reset form
    form.reset();
  });

  const closeModal = () => {
    if (modal) modal.classList.remove('active');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (dismissBtn) dismissBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

// Download .ics Calendar Event
function downloadIcs(name, service, dateStr, timeStr) {
  const eventDate = dateStr.replace(/-/g, '');
  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Umar Dental Clinic//Appointment Scheduler//EN',
    'BEGIN:VEVENT',
    `SUMMARY:Dental Appointment: ${service} - Umar Dental Clinic`,
    `DESCRIPTION:Appointment for ${name} at Umar Dental Clinic. Tagline: Your Smile is Important to Us.`,
    `DTSTART;VALUE=DATE:${eventDate}`,
    `DTEND;VALUE=DATE:${eventDate}`,
    'LOCATION:Umar Dental Clinic',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `UmarDentalClinic_Appointment_${dateStr}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ==========================================================================
   7. Scroll To Top Button
   ========================================================================== */
function initScrollTop() {
  const scrollTopBtn = document.querySelector('.btn-scroll-top');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   8. Service Procedure Breakdown Modals
   ========================================================================== */
const serviceData = {
  'general-dentistry': {
    title: 'General Dentistry',
    description: 'Comprehensive oral examinations, diagnostic assessments, digital cavity screening, and preventive consultations designed to maintain lifetime oral health.',
    duration: '30 - 45 Minutes',
    anesthesia: 'None required for routine exams',
    steps: [
      'Comprehensive dental examination & gum health evaluation',
      'Diagnostic digital imaging & cavity assessment',
      'Personalized preventative hygiene recommendations'
    ]
  },
  'teeth-cleaning': {
    title: 'Teeth Cleaning and Scaling',
    description: 'Professional ultrasonic scaling and polishing that gently removes accumulated plaque, hardened tartar, and surface stains to prevent gingivitis and periodontal disease.',
    duration: '45 - 60 Minutes',
    anesthesia: 'Topical numbing gel if gums are sensitive',
    steps: [
      'Ultrasonic tartar and plaque removal above & below gumline',
      'Interdental flossing and precision micro-scaling',
      'Prophy-paste polishing for a smooth, shining enamel surface'
    ]
  },
  'teeth-whitening': {
    title: 'Teeth Whitening',
    description: 'Safe, clinical-grade teeth whitening procedures formulated to eliminate deep coffee, tea, and aging stains, lifting your teeth by several natural shades.',
    duration: '60 Minutes',
    anesthesia: 'Not needed (protective barrier applied for gums)',
    steps: [
      'Gingival barrier protection application',
      'Professional whitening gel activation',
      'Enamel remineralization & shade comparison'
    ]
  },
  'dental-fillings': {
    title: 'Dental Fillings',
    description: 'Tooth-colored composite resin fillings that repair cavities, restore damaged enamel, and blend seamlessly with your natural tooth shade.',
    duration: '40 - 50 Minutes',
    anesthesia: 'Gentle localized numbing',
    steps: [
      'Gentle decay removal & surface preparation',
      'Bonding agent application and multi-layer composite placement',
      'High-intensity curing light activation & bite contouring'
    ]
  },
  'root-canal': {
    title: 'Root Canal Treatment',
    description: 'Advanced endodontic procedure that removes inflamed or infected tooth pulp, sanitizes the internal root canals, and preserves your natural tooth from extraction.',
    duration: '60 - 90 Minutes (1 or 2 visits)',
    anesthesia: 'Comfortable local anesthesia',
    steps: [
      'Pain-free tooth isolation and access opening',
      'Thorough canal cleaning, disinfection & shaping',
      'Bio-compatible gutta-percha filling and crown seal'
    ]
  },
  'tooth-extraction': {
    title: 'Tooth Extraction',
    description: 'Atraumatic tooth removal performed with patient comfort as the highest priority, ideal for severely compromised teeth or impacted wisdom teeth.',
    duration: '30 - 45 Minutes',
    anesthesia: 'Full local anesthesia for pain-free treatment',
    steps: [
      'Complete local numbing and tissue preservation',
      'Gentle tooth luxation and careful removal',
      'Post-extraction gauze dressing and comprehensive home-care instructions'
    ]
  },
  'dental-implants': {
    title: 'Dental Implants',
    description: 'Biocompatible titanium dental implants that act as permanent replacement roots, topped with custom porcelain crowns for full chewing capability and natural smile aesthetics.',
    duration: 'Phased Treatment (Surgical & Restorative)',
    anesthesia: 'Local anesthesia or sedation support',
    steps: [
      'Comprehensive 3D bone and anatomy assessment',
      'Precision implant post placement and osseointegration period',
      'Custom ceramic crown fabrication and permanent placement'
    ]
  },
  'braces-orthodontics': {
    title: 'Braces and Orthodontics',
    description: 'Modern orthodontic treatments including traditional low-profile metal brackets, ceramic aesthetic braces, and clear aligner consultations for proper alignment and bite correction.',
    duration: 'Treatment plans range 6 - 24 Months',
    anesthesia: 'None required',
    steps: [
      'Diagnostic photographic and impression study',
      'Custom bracket bonding or aligner tray distribution',
      'Periodic progress adjustments and alignment reviews'
    ]
  },
  'cosmetic-dentistry': {
    title: 'Cosmetic Dentistry',
    description: 'Smile design, porcelain veneers, aesthetic composite bonding, and contouring crafted to enhance symmetry, color, and confidence.',
    duration: '1 - 2 Appointments',
    anesthesia: 'Minimal or none depending on procedure',
    steps: [
      'Comprehensive digital smile evaluation',
      'Custom veneer or aesthetic bonding shaping',
      'Final high-gloss polish and smile reveal'
    ]
  }
};

function initServiceModals() {
  const modal = document.getElementById('service-detail-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('btn-close-service-modal');
  const learnBtns = document.querySelectorAll('.btn-learn-service');

  learnBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceKey = btn.getAttribute('data-service-key');
      const data = serviceData[serviceKey];
      if (!data) return;

      document.getElementById('service-modal-title').textContent = data.title;
      document.getElementById('service-modal-desc').textContent = data.description;
      document.getElementById('service-modal-duration').textContent = data.duration;
      document.getElementById('service-modal-anesthesia').textContent = data.anesthesia;

      const stepsList = document.getElementById('service-modal-steps');
      stepsList.innerHTML = '';
      data.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
      });

      const bookDirectBtn = document.getElementById('service-modal-book-btn');
      if (bookDirectBtn) {
        bookDirectBtn.onclick = () => {
          modal.classList.remove('active');
          const serviceSelect = document.getElementById('service-select');
          if (serviceSelect) serviceSelect.value = data.title;
          const appt = document.getElementById('appointment');
          if (appt) appt.scrollIntoView({ behavior: 'smooth' });
        };
      }

      modal.classList.add('active');
    });
  });

  const closeModal = () => modal.classList.remove('active');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ==========================================================================
   9. Doctor Direct Booking Helper
   ========================================================================== */
function initEditableTooltips() {
  // Allow clicking on doctor card "Book with Doctor"
  const doctorBookBtns = document.querySelectorAll('.btn-book-doctor');
  doctorBookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const docName = btn.getAttribute('data-doctor');
      const noteInput = document.getElementById('patient-message');
      if (noteInput && docName) {
        noteInput.value = `Consultation requested with ${docName}.`;
      }
      const appt = document.getElementById('appointment');
      if (appt) appt.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
