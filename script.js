
window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function removeTransition(event) {
    console.log("event", event);
    /*
    if (event.propertyName !== 'transform') {
        return;
    }
    console.log(event.propertyName);
    console.log("test", this)
       this.classList.remove('playing'); 
       */
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
console.log("wtf");