function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector $(".navbar");
        if (distanceY > shrinkOn) {
            classie.add(.navbar,"smaller");
        } else {
            if (classie.has(.navbar,"smaller")) {
                classie.remove(.navbar,"smaller");
            }
        }
    });
}
window.onload = init();