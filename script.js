document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);

    overlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});

