// Newsletter form handling
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();
  let messageContainer = document.getElementById('newsletter-message');

  if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.id = 'newsletter-message';
    emailInput.parentNode.appendChild(messageContainer);
  }

  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    messageContainer.textContent = 'Please enter your email';
    messageContainer.style.color = 'red';
    return;
  }

  if (!emailPattern.test(email)) {
    messageContainer.textContent = 'Invalid email address';
    messageContainer.style.color = 'red';
    return;
  }

  // TODO: Integrate with a backend/newsletter API here
  messageContainer.textContent = `Thank you for subscribing! We'll reach out to ${email} soon.`;
  messageContainer.style.color = 'green';
  this.reset();
});

// 🌒 Dark mode toggle
const toggleDark = document.getElementById('toggle-dark');
const body = document.body;

// Load saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark');
}

// Toggle dark mode on button click
toggleDark.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
});

// 📱 Mobile navigation toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('show');
});

// 👁 Scroll reveal animation
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