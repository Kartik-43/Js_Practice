var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");
var tl = gsap.timeline()

tl.to("#full", {
    delay: 0.2,
    right: 0,
    duration: 0.6,
})

tl.from("#full h4", {
    x: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
})

tl.from("#full i", {
    y: -100,
    opacity: 0,
    duration: 0.3,
})

tl.pause();

menu.addEventListener("click", function (){
    tl.play();
})

cross.addEventListener("click", function (){
    tl.reverse();
})
