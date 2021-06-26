function showColor() {
    var el = document.querySelector("p");
    console.log(el.style.color);
}

function changeColor() {
    var el = document.querySelector("p");
    el.style.color = "#d7465f";
}

function changeColor() {
    var el = document.querySelector("p");
    el.style.backgroundColor = "#d7465f";
}

function changeStyles() {
    var el = document.querySelector(".second");
    el.style.backgroundColor = "aliceBlue";
    el.style.borderRadius = "45px";
}

function displayAttribute() {
    var el = document.querySelector("img");
    var imageLink = el.getAttribute("src");
    console.log(imageLink);
}