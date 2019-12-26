function showAnimation() {
    document.getElementById("animation").style.display = "inline";
    setTimeout(() => {
        document.getElementById("animation").style.display = "none";
        document.getElementById("animation").src = document.getElementById("animation").src
    }, 7000)
}

var options = {
    strings: ["Know Thyself!","Know Thyself!","Know Thyself!",
    ],
    startDelay: 250,
    typeSpeed: 75,
    loop: false,
    autoInsertCss: false,
    smartBackspace: true
}

var typed = new Typed(".typed", options);