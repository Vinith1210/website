document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const offsetTop = targetSection.offsetTop;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', submitForm);
  
    function submitForm(e) {
      e.preventDefault();
      // Your form submission logic here
      alert('Form submitted successfully!');
      contactForm.reset();
    }
  });
  