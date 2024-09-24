const form = document.body.appendChild(document.createElement("form"));

const input = form.appendChild(document.createElement("input"));
const button = form.appendChild(document.createElement("button"));
const message = form.appendChild(document.createElement("div"));

button.style.width = "100px";
button.style.height = "50px";
button.innerHTML = "SUBMIT";


input.style.width = "600px";
input.style.height = "50px";
input.style.fontSize = "20px";
input.type = "email";

message.style.fontSize = "18px";

form.addEventListener("submit",  function(event) {
    event.preventDefault();
    const email = input.value;
    input.value = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    // can also use function to check the availability of @ and . in the string provided by the user, but this is much simpler way of checking if the user input is okay !
    console.log(email);

    if (regex.test(email)) {
        message.style.color = "green";
        message.innerHTML = "Email is valid";
    }

    else {
        message.style.color = "red";
        message.innerHTML = "Email is not valid";
    }
});
