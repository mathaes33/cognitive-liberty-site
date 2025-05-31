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
