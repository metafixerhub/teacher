const Interactions = {
    discoveredCount: 0,
    totalObjects: 4,
    
    init: function() {
        this.setupObject('obj-letter', 'content-letter');
        this.setupObject('obj-book', 'content-book');
        this.setupObject('obj-report', 'content-report');
        this.setupObject('obj-folder', 'content-folder');
        
        document.getElementById('close-overlay').addEventListener('click', () => {
            document.getElementById('overlay-container').classList.add('hidden');
            const contents = document.querySelectorAll('.overlay-content');
            contents.forEach(c => c.classList.add('hidden'));
            
            this.checkFinalSequence();
        });
    },
    
    setupObject: function(objId, contentId) {
        const obj = document.getElementById(objId);
        if(obj) {
            obj.addEventListener('click', () => {
                document.getElementById('overlay-container').classList.remove('hidden');
                document.getElementById(contentId).classList.remove('hidden');
                
                if (!obj.dataset.discovered) {
                    obj.dataset.discovered = "true";
                    this.discoveredCount++;
                }
            });
        }
    },
    
    checkFinalSequence: function() {
        if (this.discoveredCount >= this.totalObjects) {
            // Trigger final sequence
            const blackboardMsg = document.getElementById('blackboard-message');
            if (blackboardMsg && !blackboardMsg.innerHTML) {
                setTimeout(() => {
                    document.querySelector('.classroom-bg').classList.add('warm');
                    blackboardMsg.innerHTML = `
                        <p>Thank You, Gayathri Ma’am.</p>
                        <p style="font-size:1.5rem; margin-top:20px;">For teaching us.<br>For guiding us.<br>For believing in us.<br>For inspiring us.</p>
                        <h1 style="color:var(--color-gold); font-family:var(--font-heading); margin-top:30px;">❤️ HAPPY TEACHER'S DAY ❤️</h1>
                        <p style="font-size:1.2rem; margin-top:20px; text-align:right;">From your student,<br>Nur Mohammad Mandal — 7th</p>
                    `;
                    blackboardMsg.classList.add('show');
                }, 1000);
            }
        }
    }
};
