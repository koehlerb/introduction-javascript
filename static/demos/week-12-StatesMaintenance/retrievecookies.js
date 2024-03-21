"use strict";

// prepare for the button click eventlisteners
//let getCookie = getCookie("color");

window.onload = function () {
  document
    .getElementById("allcookies")
    .addEventListener("click", showAllCookies);
  document.getElementById("namedcookie").addEventListener("click", namedCookie);
  document
    .getElementById("mvaluecookie")
    .addEventListener("click", mvaluedCookie);
};

/**
 * Retrieve the m-valued cookie, user, then separate and show the multiple values
 * if the cookie doesn't exist, a message will be displayed accordingly.
 */
function mvaluedCookie() {
  // for the example, we assume only specific cookie, i.e., user, has the multi-values
  let userData = getCookie("user");
  if (userData) {
    let [name, email] = userData.split("|");
    document.getElementById("output").innerHTML = `Cookie user has these values:
          name:${name}; email: ${email}`;
  } else {
    document.getElementById("output").innerHTML =
      "<p>The multi-valued cookie doesn't exist. Create it on Create Cookies page, then try it again here.</p>";
  }
}

/**
 * This function will retrieve and return the named cookie, if found.
 * Otherwise, it will return null
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

/*
  Get the name=value array of all cookies.
  Then make a table string using the names and values.
  Finally show the table on the page
*/
function showAllCookies() {
  let cookies = document.cookie.split(";");
  let htmlstr = "<table><tr><th>Cookie Name</th><th>Cookie Value</th></tr>";
  for (let cookie of cookies) {
    const [name, value] = cookie.split("=");
    htmlstr += `<tr><td>${name}:</td><td>${decodeURIComponent(value)}</td></tr>`;
  }
  htmlstr += "</table>";
  document.getElementById("output").innerHTML = htmlstr;
}

/**
 * Retrieve the cookie named by the user. If it doesn't exist, show a message accordingly.
 */
function namedCookie() {
  let name = prompt("Cookie name please:");
  let cookie = getCookie(name);
  if (cookie) {
    document.getElementById(
      "output"
    ).innerHTML = `Cookie ${name} value is: ${getCookie(name)}`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `The cookie named ${name} doesn't exist.`;
  }
}
