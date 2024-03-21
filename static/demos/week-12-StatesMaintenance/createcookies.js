"use strict";

/**
 * When the page is loaded, get hold of the buttons and
 * attach an event listener to each
 * */
window.onload = function () {
  let btnSimpleCookie = document.querySelectorAll("button")[0];
  let btnMoreCookie = document.querySelectorAll("button")[1];
  let btnMVCookie = document.querySelectorAll("button")[2];
  let btnDelCookie = document.querySelectorAll("button")[3];
  btnSimpleCookie.addEventListener("click", simpleCookie);
  btnMoreCookie.addEventListener("click", moreCookie);
  btnMVCookie.addEventListener("click", mvCookie);
  btnDelCookie.addEventListener("click", deleteCookie);
};

/**
 * Create a simple cookie. For the purpose of illustration - it asks the user for
 * the cookie info. In a real application, it would be done by the code based on the need.
 */
function simpleCookie() {
  // ask user for a cookie name
  let cookieName = prompt("enter a cookie name please");
  // ask user for a cookie value
  if (cookieName) {
    let cookieValue = prompt("enter the cookie value please");
    // simple way for creating a cookie
    document.cookie = `${cookieName}=${cookieValue}`;
    // show the cookie created - assumed.
    document.querySelector(
      "#output"
    ).innerHTML = `<p>Cookie: ${cookieName}=${cookieValue}</p>`;
  }
}

/**
 * This function will call another function to create several cookies with
 * different parameter values
 */
function moreCookie() {
  createCookie("username", "John Doe", 10);
  createCookie("location", "BC", 10, "/");
  document.querySelector("#output").innerHTML =
    "<p>2 predefined cookies are created</p>";
}

/**
 * The function below wil create a cookie based on the parameter values provided.
 * @param {string} name
 * @param {string} value
 * @param {integer} days
 * @param {string} path
 * @param {string} domain
 * @param {string} secure
 */
function createCookie(name, value, days, path, domain, secure) {
  let maxage; // Think: why need to declare it here but not in the if block?
  if (days) {
    // let date = new Date();
    // date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Think: what the formula is about?
    // expires = date.toGMTString();
    maxage = days * 24 * 60 * 60;
  }
  let cookieString = `${name}=${encodeURIComponent(value)}`;
  if (maxage) { cookieString += `; max-age=${maxage}`;}
  if (path) { cookieString += `; path = ${encodeURIComponent(path)}`; }
  if (domain) { cookieString += `; domain = ${encodeURIComponent(domain)}`; }
  if (secure) { cookieString += "; secure"; }
  document.cookie = cookieString; // create the cookie
}

/**
 * Create a multi-valued cookie. For the purpose of illustration, it asks the user for
 * the cookie info. In a real application, it would be done by the code based on the need.
 */
function mvCookie() {
  // ask the user for the cookie's name
  let userName = prompt("Enter your name please:");
  // ask user for the 1st value
  let email = prompt("Enter your email please:");

  // create a m-valued cookie; each name-value pair is separated by a |
  document.cookie = `user=${userName} | ${email}; max-age=3600;`;
  // show the cookie created - assumed.
  document.querySelector(
    "#output"
  ).innerHTML = `<p>Multi-valued Cookie created: user=${userName}|${email};</p>`;
}

/**
 * this function will delete the named cookie by creating
 * the same named cookies, with an empty string value and an expired date
 * @param {string} name
 */
function deleteCookie() {
  let name = prompt("Cookie name to delete please:");
  createCookie(name, "", -1);
  document.getElementById(
    "output"
  ).innerHTML = `<p>Cookie ${name} deleted.</p>`;
}