
function playSound(key) {
    const audio = document.querySelector(`audio#${key.id}`);
    if (audio) {
        audio.currentTime = 0; 
        audio.play();
        key.classList.add('playing'); 
    }
}


function removeTransition(e) {
    if (e.propertyName === 'transform') {
        e.target.classList.remove('playing'); 
    }
}


window.addEventListener('keydown', function(e) {
    const key = document.getElementById(e.key.toUpperCase());
    if (key) playSound(key);
});


document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => playSound(key)); 
    key.addEventListener('transitionend', removeTransition); 
});


// Get the modal and the button
const modal = document.getElementById("howToPlayModal");
const btn = document.getElementById("howToPlayBtn");
const span = document.querySelector(".close");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on the close button (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
