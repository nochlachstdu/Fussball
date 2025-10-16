const texts = document.querySelectorAll('.text');

function checkPosition() {
    const triggerPoint = window.innerHeight * 0.85; // wann Text sichtbar wird

    texts.forEach(text => {
        const textTop = text.getBoundingClientRect().top;

        // Klasse .show hinzufügen, wenn Text in Sicht
        if(textTop < triggerPoint && textTop > 0) {
            text.classList.add('show');
        } else {
            text.classList.remove('show'); // verschwindet wieder, wenn man hochscrollt
        }
    });
}

//window.addEventListener('scroll', checkPosition);
window.addEventListener('load', checkPosition);

function givePosition() {
    //while (true) {
        let scrollPosition = document.documentElement.scrollTop;
        console.log(scrollPosition);
    //}
}

//givePosition();

