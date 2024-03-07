"use strict";
/* This JS file illustrates
 * 1. DOM queries and adding an element at the end of the child element
 * 2. Adding an element at a particular position
 * 3. Removing an element
 * 4. innerHTML disables evt handlers attached to child elements
 */


// this function finds and shows the number of items in the to-do-list
function countListItems() {
  let olElement = document.getElementById("toDoList");
  let listItems = olElement.querySelectorAll("li");
  let span = document.querySelector("#section1 p span");
  span.textContent = listItems.length;
}

// add a new item to the default (end) position of the list
function append() {
  let node = document.createElement("li");
  node.textContent = prompt("Enter a new item");
  let parent = document.querySelector("#section1 ol");
  // add the new item to the end of the list and update the count

}
// add a new item to the given position of the list
function addAtPosition() {
  let node = document.createElement("li");
  node.textContent = prompt("Enter a new item");
  let cnt = document.querySelectorAll("#section1 li").length;
  let pos = Number(prompt(`Please enter the rank of this item 1~${cnt}.`));
  let target = document.querySelectorAll("#section1 li")[pos - 1]; // 0  based
  let parent = document.querySelector("#section1 ol");

  // add the new item to the given position of the list and update the count

  // alternatively,insertAdjacentElement() can do the same job
  // target.insertAdjacentElement("beforebegin", node);

}
function removeFirst() {
  // get the parent element
  // get the first child element
  // remove the first child element
  // update the count

}
