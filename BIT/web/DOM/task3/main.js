function alert() {
    var alertText = document.querySelector("nav ul li").innerHTML;

    function alertMe() {
        var alertText = document.querySelector("nav ul li)").innerHTML;
        alert(alertText);
    }
}
alertMe();

function replaceText(text) {
    var newText = document.querySelector("ul").lastElementChild.textContent;
    newText = text;
    console.log(newText);
}

replaceText("neki tekst");

var alertText = document.querySelector("nav ul li").innerHTML;
console.log(alertText);


document.querySelector('nav ul li').textContent;
alert(document.querySelector('nav ul li').textContent);

function replaceText(text) {
    var lastChild = document.querySelector('nav ul li').textContent;
    lastChild = text;
    console.log(lastChild);

}
replaceText('neki novi tekst')