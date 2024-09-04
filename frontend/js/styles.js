// styles.js

function addEntryAnimation() {
    const container = document.querySelector('.main-container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
}

function addSelectAnimation() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', () => {
            select.style.transform = 'scale(1.05)';
            setTimeout(() => {
                select.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

function addInputAnimation() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.classList.add('pulse');
            setTimeout(() => {
                input.classList.remove('pulse');
            }, 500);
        });
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function addFlagsToSelects() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', (e) => {
            const selectedOption = e.target.options[e.target.selectedIndex];
            const flagCode = selectedOption.getAttribute('data-flag');
            e.target.style.backgroundImage = `url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${flagCode}.svg)`;
            e.target.style.backgroundSize = '20px';
            e.target.style.backgroundPosition = '10px center';
            e.target.style.backgroundRepeat = 'no-repeat';
        });
        // Trigger change event to set initial flag
        select.dispatchEvent(new Event('change'));
    });
}

function showPreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
}

function initAnimatedBackground() {
    const background = document.getElementById('animated-background');
    background.style.opacity = '0';
    setTimeout(() => {
        background.style.transition = 'opacity 1s ease';
        background.style.opacity = '1';
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    showPreloader();
    setTimeout(() => {
        addEntryAnimation();
        addSelectAnimation();
        addInputAnimation();
        addFlagsToSelects();
        initAnimatedBackground();
    }, 1000);

    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('change', toggleTheme);
});