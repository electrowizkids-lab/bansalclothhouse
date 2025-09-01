// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when clicking a link (good for one-page)
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => siteNav.classList.remove('open'));
  });
}

// Smooth scroll for hash links (nice on mobile)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// WhatsApp enquiry from contact form
function sendEnquiry() {
  const form = document.getElementById('contact-form');
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  let text = "Hello, I want to enquire:\n";
  if (name) text += "👤 Name: " + name + "\n";
  if (email) text += "📧 Email: " + email + "\n";
  if (message) text += "💬 Message: " + message + "\n";

  const url = "https://wa.me/919213991994?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}
window.sendEnquiry = sendEnquiry;

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Improve section anchor offsets (for sticky header)
document.querySelectorAll('section[id]').forEach(sec => {
  sec.style.scrollMarginTop = '80px';
});
