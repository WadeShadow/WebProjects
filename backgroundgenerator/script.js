let cssOut = document.querySelector("h3");
let leftInput = document.getElementById("color1");
let rightInput = document.getElementById("color2");
let body = document.querySelector("body");
let randomButt = document.querySelector(".random");

function setGradient( ){
    body.style.background = "linear-gradient(to right, "+leftInput.value+", "+rightInput.value+")";
    leftInput.style.border = "2px solid "+leftInput.value;
    rightInput.style.border = "2px solid "+rightInput.value;

    cssOut.textContent = body.style.background + ";";
    return setGradient;

}

// randomButt.addEventListener("click", function(){

// })

leftInput.addEventListener("input", setGradient());
rightInput.addEventListener("input", setGradient());

