function initClassroom() {
    const gate = document.getElementById('main-gate');
    const corridorScreen = document.getElementById('corridor-screen');
    const classroomScreen = document.getElementById('classroom-screen');
    
    if(gate) {
        gate.addEventListener('click', () => {
            // Start audio on first interaction
            AudioManager.playMusic();
            
            // Open door animation
            gate.classList.add('door-open');
            
            // Wait a moment then start walk-in animation
            setTimeout(() => {
                document.querySelector('.corridor-bg').classList.add('walk-in');
                document.getElementById('gate-message').style.display = 'none';
                gate.style.display = 'none';
            }, 500);
            
            // Transition to classroom screen
            setTimeout(() => {
                corridorScreen.classList.remove('active');
                classroomScreen.classList.add('active');
            }, 2500);
        });
    }
}
