"use strict";
/**
 * when the page is loaded, check if backcolor cookie exists.
 * If yes, it will use the color to set the page's background-color. 
 * Otherwise, it will ask for the color for the backcolor cookie
 * and set the page's background color accordingly.
 */
window.addEventListener("load", statepersistence);
function statepersistence() {
  let name = "backcolor";
  let cookieVal = getCookie(name);
  if (!cookieVal) {
    let ans = prompt(
      `The cookie named ${name} doesn't exist. Do you want to create it?`
    );
    // if the 1st letter is "y" in the response, create a new cookie backcolor
    if (ans && ans.trim().toLowerCase()[0] == "y") {
      cookieVal = prompt(`please enter the value for the cookie ${name}`);
      if (cookieVal) {
        document.cookie = `${name}=${cookieVal}; max-age=36000`;
      }
    }
  }
  document.body.style.backgroundColor = cookieVal? cookieVal : "white";
}

/**
 * This function is the same function as in retrievecookie.js file. 
 * It will retrieve and return the named cookie, if found.
 * Otherwise, it will return null.
 * */
function getCookie(name) {
 
  let cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let cookieParts = cookie.split("=");
    if (cookieParts[0].trim() == name) {
      return decodeURIComponent(cookieParts[1].trim());
    }
  } //end of for loop
  return null;
}
