---
sidebar_position: 93
---

# Frequently Asked Questions

## How to add JavaScript code to a web page?

You could use one of the following two ways to add js code to your web page.

1. Write the js code directly in your html page. This is commonly used for
   beginners. it seems intuitive and easy to do. However, it's hard to
   maintain and also clutter your html code as well.
1. A recommended approach is to put your js code in a separate file and
   attach it to your web page.

## How to link my js file to a web page?

1. You will use `<script src =" ">` to do it. The question is where
   to put this tag. Tow locations are commonly used. One is in the head
   section of the page and the other is at the bottom of the page right
   above the closing body tag. Each has its pros and cons.

1. Traditionally, the head section was a more commonplace. If you use
   js code to create part of the page without referencing any component
   of the page, this would be fine. However, since the page is loaded
   sequentially from top to bottom, js code is loaded before the body.
   If your js code executes right away after it's loaded, it cannot
   access or manipulate components on the page because they are not
   available yet.
1. Putting the link at the bottom of the page will avoid the problem
   mentioned above. However, if in you html code you have embedded js
   code and that needs to call any function defined in the external js
   file, it will fail. Since blending js code within html code is not
   recommended, you shouldn't have any js function call within the html
   code. If you follow this practice, it will not be a problem to put
   the js link at the bottom of the page. This is the recommended approach.
1. The window load event is fired when the whole page has loaded, including
   all dependent resources. If you set up the load event listener on window,
   then run the js code after load event occurs, the problem mentioned in
   item 1 above will not occur.

So, if you handle it properly, either location would be fine, though many
developers advocate for the bottom location.

## How to minimize js code syntax errors?

This is covered in the week 1 lecture notes. Please refer to that document
for details.

## How to debug my js code?

First you need to follow the best practice to minimize the potential
errors in your js code. However, errors are very common. No need to be
frustrated or panic. Here is a procedure you may follow:

1. Check the message or any indication in your code editor such as
   VS Code to pinpoint the source of the error.
1. Insert an `alert()` function at the locations where errors likely occur.
   This may narrow down the scope of your search for errors.
1. If the editor you use cannot help you identify the exact location of the
   error,
   1. Browse your page in Chrome (or another browser). R-click on the
      page | Inspect Element to show the Developer Tools panel.
   1. Click on the Source Tab in Developer Tools panel, locate and click on
      the js file from the navigation tree
   1. Refresh the page. the errors will be underlined with red color.
   1. Click on the red-cross mark in front of the error line to show the
      error details.
   1. Repeat the process until all errors are cleared.
      NOTE: Some versions of Chrome may not show js files after step ii.
      If that's the case with your Chrome browser, PRESS F5 or refresh the
      page should reload the page and reveal the js files under the Source
      tab.

## How to apply js code to selected pages?

When you have a large js file, some code may only apply to certain pages
but not to others. If your js code needs to access certain elements that
are not available on the page, error may occur. It not only affects the
code involved but also affects other code's execution. In the worst case,
no js code will run on that page.

How to avoid this type of problem? Here are several strategies for you
to consider:

1. Separate the js code. If a portion of the code is only applicable
   to selected pages, it should be separated from other parts into its
   own js file, then link it to the related pages. Not only will this
   minimize the troubles you encountered or may encounter but also reduce
   the file size and network payload.
1. Check the availability of certain elements when executing the js code.
   js code will trigger an error if you try to access a property or method
   of a non-existing element. So check if the element exists before your
   code accesses its properties / methods. For example,
   `getElementById('idname')` will return a null if the `'idname'` doesn't
   exist on the page.
1. Before applying the code, check the page file name to decide if the js
   code should run or not. You may find different ways to do it and here is one:

```javascript
if (document.URL.indexOf('filename') >= 0) {
  // run the code
} else {
  return;
}
```

NOTE: URL is a string property of the web page.

## How to validate dynamic HTML code created / modified by JavaScript?

There are ways to do it but an easy method might be using a bookmarklet
in your browser. When testing the page that has JS created HTML code,
click on the bookmark to send the page to W3 Validator. Here is a procedure
for creating a bookmarklet in Chrome browser. The procedure would be
similar for Firefox and other browsers.

1. Copy the code snippet from this web post, under the Bookmarklet section heading:
   http://stackoverflow.com/questions/10377840/making-finding-html5-validator-bookmarklet/10420384#10420384
1. Show Bookmarks Bar on your browser - Options
   Button | Bookmarks | Show bookmarks bar.
1. Right-click in a blank area of the Bookmarks bar, then choose Add
   page (i.e., a bookmark). Two fields appear on screen: Name and URL.
1. Enter a name of your choice for the bookmark in the Name field.
1. Paste the code snippet you copied into the URL field.
1. Close the Bookmark Manager
1. View your JS powered webpage in the browser, then click on the bookmark you have created above.
