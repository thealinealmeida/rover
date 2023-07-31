const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const roverWidth = 100;
const roverHeight = 90;

var roverX = 10;
var roverY = 10;

const borderRight = canvas.width - roverWidth;
const borderBottom = canvas.height - roverHeight;

const backgroundImage = "mars.jpg";
const roverImage = "rover.png";

var backgroundImgTag, roverImgTag;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.src = backgroundImage;
    backgroundImgTag.onload = uploadBackground;
    
    roverImgTag = new Image();
    roverImgTag.src = roverImage;
    roverImgTag.onload = uploadRover;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", keyDown);


