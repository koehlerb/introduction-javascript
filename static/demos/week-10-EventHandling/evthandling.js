"use strict";
/**
 * this JS file covers
 * 1. basic event handling - Multiple way to enable element to respond to event;
 * 2. Even propagation
 * .
 *  */

// Using the onclick property of an element
let btnDOMHandler = document.querySelector("#DOMHandler"); // get hold of the button element
btnDOMHandler.onclick = DOMHandler; //  assign the function name but no () to the onclick property
// This function serves as the event handler, assigned to the element's onclick property
function DOMHandler() {
  let ele = document.querySelector("#section1");
  ele.innerHTML +=
    `<p>The event handler is attached to the onclick property of the button. </p>`;
}
// Using addEventlistener(); This option allows multiple handlers for the same event
let btnDOM2Listener = document.querySelector("#DOM2Listener");
btnDOM2Listener.addEventListener("click", DOM2Handler);

function DOM2Handler() {
  document.querySelector("main h3").classList.add("setFont");
  let ele = document.querySelector("#section1");
  let p = document.createElement("p");
  p.textContent = `This is from a DOM2 E.Handler for click. class setFont is added to main h3.`;
  ele.appendChild(p);
}

btnDOM2Listener.addEventListener("click", DOM2Handler2)
function DOM2Handler2() {
  document.querySelector("main h3").classList.add("setBackColor");
  let ele = document.querySelector("#section1");
  let p = document.createElement("p");
  p.textContent = `This is from a DOM2Handlers. class setBackColor is added to main h3`;
  ele.appendChild(p);
}
