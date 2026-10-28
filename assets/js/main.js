const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, article').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

const emailCard = document.querySelector('.contact-card[href^="mailto:"]');
if (emailCard) {
  emailCard.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('jeugenio2050@gmail.com');
    const textSpan = emailCard.querySelector('span');
    const originalText = textSpan.textContent;
    textSpan.textContent = 'E-mail copiado!';
    setTimeout(() => {
      textSpan.textContent = originalText;
    }, 2000);
  });
}
