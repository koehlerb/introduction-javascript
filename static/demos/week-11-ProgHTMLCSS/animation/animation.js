/* eslint-disable no-console */
// Cannot block {} this section of code because squareD is needed in the code below
// get the objects on the page and add event listeners to them
const squareA = document.getElementById("A");
const squareB = document.getElementById("B");
const squareC = document.getElementById("C");
const squareD = document.getElementById("D");
const squareE = document.getElementById("E");

squareA.addEventListener("click", rotateA);
squareB.addEventListener("click", fading);
squareC.addEventListener("click", moveC);
squareD.addEventListener("click", moveD);
squareE.addEventListener("click", moveE);
squareD.addEventListener("dblclick", stopAnimeD);

/* This code is for the animation of the squareA
  * the square will rotate 2 degrees every time the user clicks on it
  * It can be done with timer event or with requestAnimationFrame
  * */
let timerID;
let angleA = 0;
function rotateA() {
  if (timerID) {
    clearInterval(timerID);
    timerID = 0;
  } else {
    timerID = setInterval(() => {
      angleA = (angleA + 2) % 360;
      squareA.style.transform = `rotate(${angleA}deg)`;
    }, 1000 / 60);
    /*
    angleA = (angleA + 2) % 360;
    squareA.style.transform = `rotate(${angleA}deg)`;
    window.requestAnimationFrame(rotateA);
    */
  }
}
/* This code is for the animation of the squareB */
function fading(e) {
  //delay for a second then change the opacity to 0
  e.target.classList.add("hide");
  //setTimeout(show, 2000, e);
  setTimeout(() => {
    e.target.classList.remove("hide");
  }, 2000);
}

function moveC(e) {
  e.target.classList.add("right");
  setTimeout(() => {
    e.target.classList.remove("right");
  }, 3000);
}

/* The follow code is for the animation of the squareD.
  * the animation is controlled with requestAnimationFrame.
  * it also shows how to stop the animation using cancelAnimationFrame
  * */
let squareDx = 2;
let moveRight = true;
let animeDnum;

function moveD() {
  //This will disable multiple clicks on squareD
  squareD.removeEventListener("click", moveD);
  animeD();
}

function stopAnimeD() {
  cancelAnimationFrame(animeDnum);
}
function animeD() {
  if (squareDx >= 490 && moveRight) {
    moveRight = false;
  } else if (squareDx <= 10 && !moveRight) {
    moveRight = true;
  }
  if (moveRight) {
    squareD.style.backgroundColor = "green";
    squareDx = (parseInt(squareDx) + 2) % 500;
  } else {
    squareD.style.backgroundColor = "blue";
    squareDx = (parseInt(squareDx) - 2) % 500;
  }
  squareD.style.transform = `translateX(${squareDx}px)`;
  animeDnum = requestAnimationFrame(animeD);
}

function moveE(e) {
  e.target.style.left = "500px"; // here the unit is required
  setTimeout(() => {
    e.target.style.left = "10px"; // here the unit is required
  }, 3000);
}
