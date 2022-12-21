// Mobile menu toggle
const navToggle = document.querySelector('#nav-toggle');
const navContent = document.querySelector('#nav-content');

navToggle.addEventListener('click', () => {
  navContent.classList.toggle('hidden');
});
