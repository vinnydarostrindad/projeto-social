var navMenu = document.getElementById('nav')
var disp = document.getElementById('disp')
var btnMenu = document.getElementById('btnMenu')
var iframe = document.getElementById('iframe')

function mudouTamanho() {
    if (window.innerWidth >= 769) {
        disp.style.filter = ""
        document.body.style.backdropFilter = ""
    } else if (navMenu.classList == "nav") {
        disp.style.filter = "blur(5px)"
        document.body.style.backdropFilter = "blur(5px)"
    }
}

function menu() {
    navMenu.classList.toggle("nav");
    
    borrar()
    animation()
}

function menuBG() {
    disp.style.backgroundImage = "url('src/img/dispositivos/iphone.png')"
    iframe.style.height = "532px"
}

function linkedinBG() {
    disp.style.backgroundImage = "url('src/img/dispositivos/iphone-linkedin-header.png')"
    iframe.style.height = "468px"
}

function githubBG() {
    disp.style.backgroundImage = "url('src/img/dispositivos/iphone-github-header.png')"
    iframe.style.height = "468px"
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
    if (btnMenu.style.animation == "150ms linear 0s 1 normal none running abrirMenu") {
        btnMenu.style.animation = "fecharMenu 150ms 1 linear"
    } else {
        btnMenu.style.animation = "abrirMenu 150ms 1 linear"
    }
}