function checkOrientation() {
    const orientationScreen = document.getElementById('orientation-screen');
    const corridorScreen = document.getElementById('corridor-screen');
    
    // Always start the experience if we are in landscape or on a wider screen (desktop)
    if (window.innerWidth > window.innerHeight) {
        orientationScreen.classList.remove('active');
        if (!corridorScreen.classList.contains('active') && !document.getElementById('classroom-screen').classList.contains('active')) {
            corridorScreen.classList.add('active');
            setTimeout(() => {
                const texts = document.querySelectorAll('.fade-text');
                texts.forEach(t => t.classList.add('show'));
            }, 1000);
        }
    } else {
        orientationScreen.classList.add('active');
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
