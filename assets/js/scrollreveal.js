const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 800,
    reset: true
});

//NAV
sr.reveal('.nav-logo', { delay: 100 })
sr.reveal('.nav-links', { delay: 100 })
sr.reveal('.nav-link', { delay: 200, interval: 100 });
sr.reveal('#schedule', { delay: 700 });

//HOME
sr.reveal('#home-title', { delay: 100, reset: false });
sr.reveal('#home-subtitle', { delay: 1100, reset: false });
sr.reveal('#home-text', { delay: 2100, reset: false });
sr.reveal('#home-link', { delay: 3100, reset: false });
sr.reveal('#home-img', { delay: 4100, reset: false });
sr.reveal('#home-stats', { delay: 4100, reset: false });