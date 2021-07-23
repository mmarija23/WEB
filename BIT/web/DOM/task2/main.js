function bgColor() {
    var myList = document.querySelector("div").
    nextElementSibling.firstElementChild.firstElementChild;
    myList.className = "active";

}
bgColor();


function changeClass() {
    myList.classList.remove("active");
    var firstLi = document.querySelector("div").firstElementChild.firstElementChild;
    firstLi.className = "active";
}
changeClass();
///////////////////Borislav resenje///////
function secList() {
    var ulSec = document.querySelector('#second');
    ulSec.style.backgroundColor = 'orange';
    return ulSec;
}
secList();

function selAllLiElem() {
    var liEleme = document.querySelectorAll('li');
    liEleme.forEach(function(element) {
        element.style.backgroundColor = 'blue';
    });
}
selAllLiElem();

function sellectThirdLiElements() {
    var string = [];
    var thirdLiElements = document.querySelectorAll('.third');
    thirdLiElements.forEach(function(el) {
        el.style.backgroundColor = 'red';
        el.textContent = el.textContent.toUpperCase();
    });
}
sellectThirdLiElements();