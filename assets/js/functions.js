// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});

// Simple Form Validation (for email capture)
function validateForm(form) {
  const email = form.querySelector('input[type="email"]');
  if (!email.value.includes('@')) {
    alert('Please enter a valid email.');
    return false;
  }
  // Simulate submission (in real: use Formspree or similar for actual email)
  alert('Form submitted!'); // Replace with actual logic
  return true;
}