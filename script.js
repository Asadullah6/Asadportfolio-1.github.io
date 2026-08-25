/* ==========================================================================
   ASADULLAH CHANNA - 2026 TRENDSETTER INTERACTIVE ENGINE
   Particle Canvas, Mouse Spotlight, Interactive Terminal, Bento Filter
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. INTERACTIVE PARTICLE CANVAS BACKGROUND
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = Math.min(Math.floor(width / 20), 65);
        const mouse = { x: null, y: null, radius: 140 };

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.radius = Math.random() * 1.8 + 1;
                this.color = Math.random() > 0.5 ? 'rgba(99, 102, 241, ' : 'rgba(6, 182, 212, ';
                this.alpha = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.x -= (dx / dist) * force * 1.5;
                        this.y -= (dy / dist) * force * 1.5;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color + this.alpha + ')';
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw subtle connecting lines
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 - dist / 1100})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animateCanvas);
        }

        animateCanvas();
    }

    // ----------------------------------------------------------------------
    // 2. MOUSE-FOLLOWING SPOTLIGHT ON BENTO CARDS
    // ----------------------------------------------------------------------
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ----------------------------------------------------------------------
    // 3. INTERACTIVE 2026 DEVELOPER TERMINAL
    // ----------------------------------------------------------------------
    const termOutput = document.getElementById('termOutput');
    const pillCmds = document.querySelectorAll('.pill-cmd');

    const commands = {
        'help': 'Available commands: <br>• <span style="color: var(--neon-cyan)">skills</span> — View core tech stack<br>• <span style="color: var(--neon-cyan)">experience</span> — View career highlights<br>• <span style="color: var(--neon-cyan)">contact</span> — Get direct contact links<br>• <span style="color: var(--neon-cyan)">clear</span> — Clear terminal output',
        'asad.skills': 'HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express, MongoDB, SQL, Responsive UI Design.',
        'skills': 'HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express, MongoDB, SQL, Responsive UI Design.',
        'asad.experience': '2.5+ Years Web Development Experience.<br>Specialized in Frontend architecture, client portals & interactive web apps.',
        'experience': '2.5+ Years Web Development Experience.<br>Specialized in Frontend architecture, client portals & interactive web apps.',
        'asad.contact': 'Email: asadullahchanna454@gmail.com<br>LinkedIn: linkedin.com/in/asadullah-channa<br>GitHub: github.com/Asadullah6',
        'contact': 'Email: asadullahchanna454@gmail.com<br>LinkedIn: linkedin.com/in/asadullah-channa<br>GitHub: github.com/Asadullah6'
    };

    function runCommand(cmdText) {
        if (!termOutput) return;

        const cleanCmd = cmdText.trim().toLowerCase();

        if (cleanCmd === 'clear') {
            termOutput.innerHTML = `<div class="term-line"><span class="term-prompt">❯</span><span>clear</span></div>`;
            return;
        }

        const inputLine = document.createElement('div');
        inputLine.className = 'term-line';
        inputLine.innerHTML = `<span class="term-prompt">❯</span><span>${cmdText}</span>`;
        termOutput.appendChild(inputLine);

        const responseLine = document.createElement('div');
        responseLine.className = 'term-output';
        responseLine.innerHTML = commands[cleanCmd] || `Command not found: "${cmdText}". Type <span style="color: var(--neon-cyan)">help</span> for available commands.`;
        termOutput.appendChild(responseLine);

        termOutput.scrollTop = termOutput.scrollHeight;
    }

    pillCmds.forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.getAttribute('data-cmd');
            runCommand(cmd);
        });
    });

    // ----------------------------------------------------------------------
    // 4. PROJECT CATEGORY TAB FILTERING
    // ----------------------------------------------------------------------
    const tabPills = document.querySelectorAll('.tab-pill');
    const projectCards = document.querySelectorAll('.bento-project-card');

    tabPills.forEach(pill => {
        pill.addEventListener('click', () => {
            tabPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const filter = pill.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = card.classList.contains('large') ? 'grid' : 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 5. MOBILE DRAWER MENU TOGGLE
    // ----------------------------------------------------------------------
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('active');
            const icon = hamburgerBtn.querySelector('i');
            if (mobileDrawer.classList.contains('active')) {
                icon.className = 'fas fa-xmark';
                document.body.style.overflow = 'hidden';
            } else {
                icon.className = 'fas fa-bars-staggered';
                document.body.style.overflow = '';
            }
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                hamburgerBtn.querySelector('i').className = 'fas fa-bars-staggered';
                document.body.style.overflow = '';
            });
        });
    }

    // ----------------------------------------------------------------------
    // 6. CONTACT FORM HANDLING & TOAST NOTIFICATION
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const toastBox = document.getElementById('toastBox');

    function showToast(message) {
        if (!toastBox) return;
        const toast = document.createElement('div');
        toast.className = 'toast-item';
        toast.innerHTML = `<span>${message}</span>`;
        toastBox.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 50);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Formspree natively processes the POST, we show toast before dispatch
            showToast('🚀 Sending your message to Asadullah...');
        });
    }

    // ----------------------------------------------------------------------
    // 7. CV DOWNLOAD TOAST TRIGGER
    // ----------------------------------------------------------------------
    const cvBtn = document.getElementById('cvDownloadBtn');
    if (cvBtn) {
        cvBtn.addEventListener('click', () => {
            showToast('📄 Downloading Asadullah Channa CV...');
        });
    }

    // ----------------------------------------------------------------------
    // 8. DYNAMIC YEAR
    // ----------------------------------------------------------------------
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
