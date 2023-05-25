

// SPLIDE.JS
document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
        type: 'loop',
        drag: 'free',
        snap: true,
        autoplay: true,
        interval: 3000,
        perPage: 1,
        perMove: 1,
    } );
    splide.mount();
} );

// SCROLL BUTTON TO TOP
const scrollButton = document.getElementById("scrollButton");

function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// HIDE BUTTON
function scrollFunction() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollButton.classList.toggle("show", scrollTop > 20);
}

window.addEventListener("scroll", scrollFunction);
