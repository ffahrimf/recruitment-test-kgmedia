window.onload = function () {
    const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        repeat: -1,
        repeatDelay: 1
    });

    tl.fromTo("#logo-wrapper", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.5 })
        .fromTo("#logo", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
        .fromTo("#title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.7")
        .fromTo("#subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo("#smartphone", { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5")
        .fromTo("#button", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.7")

        .to({}, { duration: 3 })

        .to(["#logo-wrapper", "#logo", "#title", "#subtitle", "#smartphone", "#button"], {
            opacity: 0,
            y: -20,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.in"
        });
};