'use strict';

(() => {
  window.addEventListener('load', (event) => {
    filterButton.addEventListener('click', () => {
      const matchingWords = filterText();
      while (filteredWords.firstChild) {
        filteredWords.removeChild(filteredWords.firstChild);
      }
      matchingWords.forEach((value) => {
        filteredWords.appendChild(document.createElement('li')).textContent =
          value;
      });
    });
  });
})();
