var body = document.querySelector('body');
var img = document.querySelector('.mario');
var xPos = 0;
var yPos = 0;

document.addEventListener('keydown', switchImgSrcLeft);
document.addEventListener('keydown', moveBackgroundLeft);

document.addEventListener('keydown', switchImgSrcRight);
document.addEventListener('keydown', moveBackgroundRight);

document.addEventListener('keyup', stopRunning);




function moveBackgroundRight(event) {
    if (event.keyCode === 39) {
        body.style.backgroundPosition = xPos + "px " + yPos;
        xPos -= 20;
    }
}

function moveBackgroundLeft(event) {
    if (event.keyCode === 37) {
        body.style.backgroundPosition = xPos + "px " + yPos;
        xPos += 20;

        console.log('left');
    }

}

function switchImgSrcRight(event) {
    if (event.keyCode === 39) {
        img.src = "./img/mario_running.gif";
        document.removeEventListener('keydown', switchImgSrcRight);
    }
}

function switchImgSrcLeft(event) {
    if (event.keyCode === 37) {
        img.src = "./img/mario_running_left.gif";
        document.removeEventListener('keydown', switchImgSrcLeft);
    }
}

function stopRunning(event) {
    if (event.keyCode === 39) {
        img.src = "./img/mario.png";
        document.addEventListener('keydown', switchImgSrcRight)
    }
    if (event.keyCode === 37) {
        img.src = "./img/mario_left.png";
        document.addEventListener('keydown', switchImgSrcLeft)
    }
}