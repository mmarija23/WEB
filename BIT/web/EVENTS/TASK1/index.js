/*function changeBackground() {
    var d = document.querySelector('form');
    d.className = 'background';
}

function returnBackground() {
    var d = document.querySelector('form')
    d.className = '';
}*/

var el = document.querySelector('input');

function changeBackground() {
    var d = document.querySelector('form');
    d.classList.toggle('background');
}

/*function returnBackground() {
    var d = document.querySelector('form')
    d.className = '';
}*/
el.addEventListener('click', changeBackground);
//el.addEventListener('click', returnBackground);

var del = document.querySelector('.second');

function turnOff() {
    var d = document.querySelector('form');
    d.classList.toggle('input');

}
del.addEventListener('click', turnOff);