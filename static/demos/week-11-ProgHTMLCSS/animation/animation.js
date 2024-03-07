/* eslint-disable no-console */
// Cannot block {} this section of code because squareD is needed in the code below
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

function show(e) {
  let submenu = e.target.firstElementChild;
  if (submenu) {
    submenu.classList.remove("hide");
  } else {
    e.target.classList.remove("hide");
  }
}

let intvID;
let angleA = 0;
function rotateA() {
  if (intvID) {
    clearInterval(intvID);
    intvID = 0;
  } else {
    intvID = setInterval(() => {
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

let squareDx = 2;
let moveRight = true;
function moveD() {
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
  requestAnimationFrame(moveD);
}
function moveE(e) {
  e.target.style.left = "500px"; // here the unit is requird
  setTimeout(() => {
    e.target.style.left = "10px"; // here the unit is requird
  }, 3000);
}
