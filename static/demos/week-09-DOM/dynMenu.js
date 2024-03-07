/**
 * This JS file shows how to make a menu (table of content) based on the existing
 * page content - assuming every section headings is a h3. 
 * follow the instruction in the loop below to create the menu
 */

let main = document.querySelector("main");

function createMenu() {
  alert("Add code to dynMenu JS file for this feature.");
  // get all H3 heading elements
  let allh3 = document.getElementsByTagName("h3");
  // create a UL element for the menu
  let menuUl = document.createElement("ul");
  main.insertBefore(menuUl, main.firstChild);
  // cycle through all h3 headings
  for (var i = 0; i < allh3.length; i++) {
    /* 1. extract textContent of the h3 element
       2. create an li element and <a> element for the li
       3. set the href of the <a> element to a target #item-i 
       4. set the text of the <a> element to the textContent of the h3 element
       5. create an <a> element with an id or name of item-i and insert it 
        right before the respective h3 heading so that the menu link can navigate to it
       */

  } // end of for loop
} // end of createMenu function