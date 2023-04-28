
  // Add an event listener to the navigation links to scroll to the corresponding section when clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Add an event listener to the footer to display the current year
  document.querySelector('footer p').textContent = `Copyrights ${new Date().getFullYear()} My Portfolio`;
