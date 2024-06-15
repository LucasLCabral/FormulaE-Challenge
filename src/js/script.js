let x = document.getElementById("musica")
function som(){
    x.play();
}

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.section-2, .section-titulo');
    const screenPosition = window.innerHeight / 1.2;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < screenPosition) {
            element.classList.add('appear');
        }
    });
});