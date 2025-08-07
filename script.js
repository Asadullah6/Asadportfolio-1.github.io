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




// Updated Resume Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.getElementById('resumeBtn');
    
    resumeBtn.addEventListener('click', function() {
        // Option 1: If you upload the PDF to your website folder
        const link = document.createElement('a');
        link.href = 'Asadullah_Channa_Resume.pdf'; // Make sure to upload the PDF with this name
        link.download = 'Asadullah_Channa_Frontend_Developer.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Optional: Add analytics tracking
        console.log('Resume downloaded by user');
        
        // Show success message (optional)
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
        this.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.background = '';
        }, 2000);
    });
});
// Resume Button Functionality - Add this to your script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const resumeBtn = document.getElementById('resumeBtn');
    
//     resumeBtn.addEventListener('click', function() {
        // Option 1: Direct download (if you have a resume file)
        // const link = document.createElement('a');
        // link.href = 'path/to/your/resume.pdf'; // Replace with actual path
        // link.download = 'Asadullah_Channa_Resume.pdf';
        // link.click();
        
        // Option 2: Open resume in new tab
        // window.open('path/to/your/resume.pdf', '_blank');
        
        // Option 3: For now, show alert (replace with actual functionality)
        // alert('Resume download will be available soon!');
        
        // Option 4: Redirect to Google Drive/Dropbox link
        // window.open('your-google-drive-or-dropbox-resume-link', '_blank');
    // });
});
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
    // });
// ...existing code...


