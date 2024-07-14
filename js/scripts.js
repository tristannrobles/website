document.addEventListener('DOMContentLoaded', () => {
    // Función para mostrar la sección seleccionada
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    // Mostrar la sección "Work" por defecto
    showSection('work');

    // Cargar la animación Lottie para el logo
    const logoAnimation = lottie.loadAnimation({
        container: document.getElementById('logo-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie/logo-animation.json' // Ruta a tu archivo de animación original
    });

    const logoAnimationAlt = lottie.loadAnimation({
        container: document.getElementById('logo-animation-alt'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie/second-animation.json' // Ruta a tu archivo de animación alternativo
    });

    const logoContainer = document.querySelector('.logo-container');

    logoContainer.addEventListener('mouseenter', () => {
        document.getElementById('logo-animation').style.display = 'none';
        document.getElementById('logo-animation-alt').style.display = 'block';
    });

    logoContainer.addEventListener('mouseleave', () => {
        document.getElementById('logo-animation-alt').style.display = 'none';
        document.getElementById('logo-animation').style.display = 'block';
    });
});
