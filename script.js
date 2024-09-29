var cursor = document.querySelector("#bubble");
var main = document.querySelector("#main");

main.addEventListener('mousemove', function(details){
    gsap.to(cursor, {
        x: details.x,
        y: details.y,
        duration: 0.7,
        ease: "back.out"
    })
})
