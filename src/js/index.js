var navMenu = document.getElementById('nav')
var disp = document.getElementById('disp')
var btnMenu = document.getElementById('btnMenu')

function menu() {
    navMenu.classList.toggle("nav");
    
    borrar()
    animation()
}

function borrar() {
    if (disp.style.filter == "blur(5px)") {
        disp.style.filter = ""
        document.body.style.backdropFilter = ""
    } else {
        disp.style.filter = "blur(5px)"
        document.body.style.backdropFilter = "blur(5px)"
    }
}

function animation() {
    if (btnMenu.style.animation == "250ms linear 0s 1 normal none running abrirMenu") {
        btnMenu.style.animation = "fecharMenu 250ms 1 linear"
    } else {
        btnMenu.style.animation = "abrirMenu 250ms 1 linear"
    }
}