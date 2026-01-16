window.onload = function () {
    const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        repeat: -1,
        repeatDelay: 1
    });

    tl
        .fromTo("#logo", { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
        .fromTo("#hero-wrapper", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, }, "-=0.5")
        .fromTo("#stars-wrapper", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, }, "-=0.5")
        .fromTo("#mini-title", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
        .fromTo("#title", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
        .fromTo("#desc", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
        .fromTo("#button", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
        .fromTo("#footer", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")

        .to({}, { duration: 5 })

        .to(["#logo", "#hero-wrapper", "#stars-wrapper", "#mini-title", "#title", "#desc", "#button", "#footer"], {
            opacity: 0,
            x: 30,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.in"
        });
};