const button = document.body.appendChild(document.createElement("button"));

button.textContent = "Click me";

// button.onclick = function(){
//     alert("Button clicked");
// }

button.addEventListener("click", function() {
    alert("Button Clicked !");
});

