const banner = document.getElementById("banner")
const before = document.getElementById("before-overlay")
const slider = document.getElementById("slider")
const volume = document.getElementById("volume")


let isDragging = false;

const updateSliderPosition = (x) => {
    const rect = banner.getBoundingClientRect();
    let position = x - rect.left;

    position = Math.max(0, Math.min(position, rect.width));
    const percentage = (position / rect.width) * 100;

    before.style.width = percentage + "%";
    slider.style.left = percentage + "%";

    const verticalPosition = 9 + (percentage * 0.82);
    volume.style.top = verticalPosition + "%";
}

const startDragging = (e) => {
    isDragging = true;
    banner.style.cursor = "pointer"

    before.classList.replace("duration-300", "duration-700");
    slider.classList.replace("duration-300", "duration-500");
    volume.classList.remove("transition-all");

    const x = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    updateSliderPosition(x);
}

const stopDragging = () => {
    isDragging = false
    banner.style.cursor = "default"

    before.style.width = "50%";
    slider.style.left = "50%";
    volume.style.top = "50%";

    before.classList.replace("duration-700", "duration-300");
    slider.classList.replace("duration-500", "duration-300");
    volume.classList.add("transition-all")
}

const drag = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const x = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    updateSliderPosition(x);
}

banner.addEventListener("mouseenter", startDragging)
banner.addEventListener("mousemove", drag)
banner.addEventListener("mouseleave", stopDragging)









