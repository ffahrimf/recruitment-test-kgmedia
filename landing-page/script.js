const modal = document.getElementById('regModal');
const btnOpen = document.getElementById('btnOpenForm');
const form = document.getElementById('pendaftaranForm');
const toast = document.getElementById('toast');


btnOpen.addEventListener('click', () => {
    modal.showModal();
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.close();
    toast.classList.remove('opacity-0', 'translate-x-10', 'pointer-events-none');

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-x-10', 'pointer-events-none');
        form.reset();
    }, 5000);
});