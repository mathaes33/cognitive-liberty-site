document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const toggleDark = document.getElementById('toggle-dark');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;

  // Newsletter Form Submit Handler
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput?.value.trim();
    let messageContainer = document.getElementById('newsletter-message');

    if (!messageContainer) {
      messageContainer = document.createElement('div');
      messageContainer.id = 'newsletter-message';
      emailInput?.parentNode?.appendChild(messageContainer);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      displayMessage('Please enter your email', 'red');
      return;
    }

    if (!emailPattern.test(email)) {
      displayMessage('Invalid email address', 'red');
      return;
    }

    // Replace with actual backend integration
    displayMessage(`Thank you for subscribing! We'll reach out to ${email} soon.`, 'green');
    form.reset();

    function displayMessage(text, color) {
      messageContainer.textContent = text;
      messageContainer.style.color = color;
    }
  });

  // Dark Mode Toggle
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark');
  }

  toggleDark?.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('darkMode', body.classList.contains('dark'));
  });

  // Mobile Navigation Toggle
  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('show');
  });

  // Scroll Reveal
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
});