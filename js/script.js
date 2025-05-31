document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const messageContainer = document.getElementById('newsletter-message') || (() => {
    const m = document.createElement('div');
    m.id = 'newsletter-message';
    emailInput.parentNode.appendChild(m);
    return m;
  })();

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
  document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (!email) return alert('Please enter your email');
  alert(`Thank you for subscribing! We'll reach out to ${email} soon.`);
  document.getElementById('newsletter-form').reset();
});

// DARK MODE TOGGLE 🌒
const toggleDark = document.getElementById('toggle-dark');
const body = document.body;

// Load dark mode state from localStorage
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark');
}

toggleDark.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
});
});
