"use strict";
/**
 * This JS file covers
 * 1. use of event object
 * 2. use evtObj.target to change the clicked element appearance
 * 3. event handling delegation
 **/

// add event listener to the buttons and the #section1 element
let btnTarget = document.getElementById("eTarget");
btnTarget.addEventListener("click", showEvtTarget);

let btnTargetProp = document.getElementById("targetProp");
btnTargetProp.addEventListener("click", setTargetProperty);

let sect1 = document.querySelector("#section1");
sect1.addEventListener("click", ehDelegation);

/**
 * This function will show the info of the element the event directly occurred on
 * @param {*} e: the event object, which will be used in the function
 */
function showEvtTarget(e) {
  let parent = document.querySelector("#section1");
  let p = document.createElement("p");
  // show the clicked element info by completing the following line of code

  p.textContent =
    `The element you clicked on is ${},
       Event target id is ${}`;
  parent.appendChild(p);
}

/**
 * this function uses evt obj's target element to change the appearance of the element that
 * the event directly occurred on.
 */
function setTargetProperty(e) {
  // toggle or apply the class .setFont to the event target element;

  let parent = document.querySelector("#section1");
  let p = document.createElement("p");

  // complete the following line of code to show the event target element info
  p.textContent =
    `The element you clicked on is ${},
       Event target id is ${}. .setFont is added to the target.`;
  parent.appendChild(p);

}

/**
 * this function a higher level element to handle an event occurred on its child or great child elements.
 */
function ehDelegation(e) {

  let ele = document.querySelector("#section1");
  let p = document.createElement("p");
  // complete the following line of code to show the event target element info
  p.textContent = `Event occurred on ${}, but it is handled by a handler on ${}. 
  Classes, setFont and setBackColor, are added to the target.`;
  ele.appendChild(p);

 // add the classes setFont and setBackColor to the event target element;
  
}
