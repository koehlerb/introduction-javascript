"use strict";
/**
 * this JS file illustrates how to let user select a stylesheet.
*/
// By default, disable all optional stylesheets.
disableCSS();
function disableCSS() {
  /* Other than the default stylesheet(s), disable all other stylesheets 
   NOTE: document.styleSheets has all loaded stylesheets. 
  */
  for (let i = 2; i < document.styleSheets.length; i++) {
    document.styleSheets[i].disabled = true;
  }
}

let btns = document.querySelector("#greenTheme");
btns.addEventListener("click", selectCSS);

function selectCSS(e) {
  // disable all optional stylesheets
 
  // enable the selected stylesheet
 
}

