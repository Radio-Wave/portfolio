// 1. Sidebar Link "Active" Glow
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Remove glow from any previously active link
    navLinks.forEach(link => link.classList.remove('active-glow'));
    // Add glow to the clicked link
    e.target.classList.add('active-glow');
  });
});

// 2. Intersection Observer for “fade in from fog”
const sections = document.querySelectorAll('.project');

const options = {
  root: null,
  threshold: 0.1
};

function revealOnScroll(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
      // unobserve to reveal each only once if you prefer
    }
  });
}

const observer = new IntersectionObserver(revealOnScroll, options);

sections.forEach(section => {
  observer.observe(section);
});