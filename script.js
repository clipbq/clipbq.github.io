document.addEventListener('DOMContentLoaded', () => {

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const copyChips = document.querySelectorAll('.copy-chip');
  const toast = document.querySelector('.toast');

  copyChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const textToCopy = chip.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          if (toast) {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
          }
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }
    });
  });

  const faqSearch = document.getElementById('faqSearch');
  const faqItems = document.querySelectorAll('#faqList details');

  if (faqSearch && faqItems.length > 0) {
    faqSearch.addEventListener('input', () => {
      const query = faqSearch.value.trim().toLowerCase();
      faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.classList.toggle('hidden', query !== '' && !text.includes(query));
      });
    });
  }
});