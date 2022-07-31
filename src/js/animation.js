//Animaties

window.onload = function () {
    const animations = document.querySelectorAll(".animated");
    window.addEventListener('scroll', fadeAnimatie);

    function fadeAnimatie() {
        for (var i = 0; i < animations.length; i++) {
            var element = animations[i]
            var visible = element.getBoundingClientRect().top - window.innerHeight + 50;
            if (visible < 0) {
                element.classList.add("visible");}
            else {
                element.classList.remove("visible");}
        }
    }
    fadeAnimatie();
};