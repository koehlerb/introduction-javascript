"use strict";
/**
 * this JS file illustrates
 * 1. the use of getAttribute()
 * 2. the use of setAttribute()
 * 3. the use of removeAttribute
 * */

// get and show the attribute of an element
function getAttrib() {
  let sect1Ol = document.querySelector("section ol"); // get the section1's ol
  let sectOlId = sect1Ol.getAttribute("id");
  // add js code to create a new li node to show the attribute value
}

// set the attribute of an element
function setAttrib() {
  let sect1Ol = document.querySelector("section ol"); // get the section1's ol
  sect1Ol.setAttribute("class", "setFont setBackColor");

}

// if the element has the attribute, remove it.
function removeAttrib() {
  let sect1Ol = document.querySelector("section ol"); // get the section1's ol
  // add js code to remove the class attribute of the ol

}