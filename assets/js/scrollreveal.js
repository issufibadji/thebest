const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 800,
    reset: true,
})

//NAV
sr.reveal(".nav-logo", { delay: 100 })
sr.reveal(".nav-links", { delay: 100 })
sr.reveal(".nav-link", { delay: 200, interval: 100 })
sr.reveal("#schedule", { delay: 700 })

//HOME
sr.reveal("#home-title", { delay: 100, reset: false })
sr.reveal("#home-subtitle", { delay: 1000, reset: false })
sr.reveal("#home-text", { delay: 2000, reset: false })
sr.reveal("#home-link", { delay: 3000, reset: false })
sr.reveal("#home-img", { delay: 3500, reset: false })
sr.reveal("#home-stats", { delay: 4000, reset: false })

//SERVICOS
//sr.reveal("#section-titles", { delay: 4100, reset: false })
//sr.reveal("#section-subtitles", { delay: 4100, reset: false })
//sr.reveal("#services-informations", { delay: 4100, reset: false })