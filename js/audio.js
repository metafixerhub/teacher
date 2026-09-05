const AudioManager = {
    bgMusic: document.getElementById('bg-audio'),
    
    playMusic: function() {
        if(this.bgMusic) {
            this.bgMusic.volume = 0.3;
            this.bgMusic.play().catch(e => console.log("Audio play blocked by browser until user interacts."));
        }
    }
};
