/*===== MENU SHOW/HIDE =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
    
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

/*===== CLOSE MOBILE MENU WHEN LINK CLICKED =====*/
const navLinks = document.querySelectorAll('.nav__link');

function closeMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLinks.forEach(link => link.addEventListener('click', closeMenu));

/*===== CHANGE ACTIVE LINK ON SCROLL =====*/
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
              sectionTop = section.offsetTop - 50,
              sectionId = section.getAttribute('id'),
              correspondingNavLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
        
        if(scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            correspondingNavLink.classList.add('active-link');
        } else {
            correspondingNavLink.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', updateActiveLink);

/*===== SCROLL REVEAL ANIMATIONS =====*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true // Uncomment if you want animations to repeat on scroll up
});

// Home section
scrollReveal.reveal('.home__data, .home__social', {}); 
scrollReveal.reveal('.home__img', {delay: 400});

// About section
scrollReveal.reveal('.about__img', {});
scrollReveal.reveal('.about__data', {delay: 400});

// Education section
scrollReveal.reveal('.education__item', {interval: 200});

// Projects section
scrollReveal.reveal('.project__item', {interval: 200});

// Skills section
scrollReveal.reveal('.skills__category', {interval: 200});

// Contact section
scrollReveal.reveal('.contact__input', {interval: 200});