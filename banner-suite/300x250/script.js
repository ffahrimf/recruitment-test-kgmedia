window.onload = function () {
    const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        repeat: -1,
        repeatDelay: 1
    });

    tl.fromTo("#logo", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 })
        .fromTo("#content", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 }, "-=0.7")
        .fromTo("#cta", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.5, ease: "back.out(1.7)" }, "-=0.7")

        .to({}, { duration: 5 })

        .to(["#logo", "#content", "#cta"], {
            opacity: 0,
            x: 50,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.in"
        });
};