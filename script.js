// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("active"));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll-to-top button
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) toTop.classList.add("show");
  else toTop.classList.remove("show");
});
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// Contact form (demo only)
const form = document.getElementById("contactForm");
const waQuick = document.getElementById("waQuick");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !message) {
    alert("Please fill all fields.");
    return;
  }

  alert("Thanks! We received your enquiry. We'll contact you shortly.");
  this.reset();
  waQuick.setAttribute("href", buildWaLink()); // refresh quick link after reset
});

// Build dynamic WhatsApp link (choose either number as default)
function buildWaLink() {
  const name = document.getElementById("name").value.trim() || "Buyer";
  const phone = document.getElementById("phone").value.trim();
  const msg = document.getElementById("message").value.trim();
  const text = encodeURIComponent(
    `Hello Bansal Cloth House,\nI want to enquire about Lycra fabrics.\nName: ${name}\nPhone: ${phone}\nRequirement: ${msg}`
  );
  // Default to Nikhil (92139 91994); change to 9891818753 if you prefer:
  return `https://wa.me/919213991994?text=${text}`;
}
waQuick.setAttribute("href", buildWaLink());
["name", "phone", "message"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    waQuick.setAttribute("href", buildWaLink());
  });
});
function sendEnquiry() {
  const name = document.querySelector("#contact-form input[name='name']").value;
  const email = document.querySelector("#contact-form input[name='email']").value;
  const message = document.querySelector("#contact-form textarea[name='message']").value;

  // Build WhatsApp message
  let text = "Hello, I want to enquire:\n";
  if (name) text += "👤 Name: " + name + "\n";
  if (email) text += "📧 Email: " + email + "\n";
  if (message) text += "💬 Message: " + message + "\n";

  // Encode for URL
  const encodedText = encodeURIComponent(text);

  // Open WhatsApp chat with your number
  const whatsappUrl = "https://wa.me/919213991994?text=" + encodedText;
  window.open(whatsappUrl, "_blank");
}
