// Scroll animations like Vale website
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                    // Animate the heading inside
                    const heading = entry.target.querySelector('h1, h2');
                    if (heading) {
                        setTimeout(() => {
                            heading.classList.add('animate-heading');
                        }, 300); // Delay after container animation
                    }
                }, index * 200); // Staggered delay
            }
        });
    }, observerOptions);

    // Observe all content containers
    const containers = document.querySelectorAll('.content-container, .page-content, .skills-container');
    containers.forEach((container, index) => {
        observer.observe(container);
        // Check if already in view on load
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(() => {
                container.classList.add('animate');
                const heading = container.querySelector('h1, h2');
                if (heading) {
                    setTimeout(() => {
                        heading.classList.add('animate-heading');
                    }, 300);
                }
            }, index * 200);
        }
    });

    // For pages with single container (separate pages), force animate on load
    if (containers.length === 1) {
        containers[0].classList.add('animate');
        const heading = containers[0].querySelector('h1, h2');
        if (heading) {
            setTimeout(() => heading.classList.add('animate-heading'), 300);
        }
    }
});
function toggleBau() { const bau = document.querySelector('.bau-3d'); if (bau) bau.classList.toggle('aberto'); }
function toggleBauFixo() { const bau = document.querySelector('.bau-3d-fixo'); if (bau) bau.classList.toggle('aberto'); }

// Mostrar baú apenas no final do scroll
window.addEventListener('scroll', () => {
    const bauFixo = document.querySelector('.bau-fixo');
    if (bauFixo) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollTop + windowHeight >= documentHeight - 100) { // 100px antes do final
            bauFixo.classList.add('visivel');
        } else {
            bauFixo.classList.remove('visivel');
        }
    }
});
