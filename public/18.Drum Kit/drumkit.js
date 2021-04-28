
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pressing');
  }

function changeCss(e){
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    key.classList.add('pressing');
}

const keys = Array.from(document.querySelectorAll('.keyboard'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',changeCss);