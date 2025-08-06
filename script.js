document.addEventListener('DOMContentLoaded', function() {
    // // Mobile Menu Toggle
    
    // Mobile Menu Toggle

document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('active');
  document.body.classList.toggle('nav-open');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    
    // Close mobile menu if open

   if (document.querySelector('.nav-links').classList.contains('active')) {
  document.querySelector('.hamburger').classList.remove('active');
  document.querySelector('.nav-links').classList.remove('active');
  document.body.classList.remove('nav-open');
}

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            const filter = this.getAttribute('data-filter');
            
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
           

    // Form Submission

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log({ name, email, message });
        alert('Message sent successfully!');
        contactForm.reset();
    });

    // Update Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();
});
 });
        });
    });
     });
        });
    });
// ...existing code...


