'use strict';

(() => {
  window.addEventListener('load', (event) => {
    pushB.addEventListener('click', myPush);
    popB.addEventListener('click', myPop);
    shiftB.addEventListener('click', myShift);
    unshiftB.addEventListener('click', myUnshift);
    const updateUI = () => {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
      arr.forEach((value, index) => {
        const newRow = document.createElement('tr');
        newRow.appendChild(document.createElement('td')).textContent = index;
        newRow.appendChild(document.createElement('td')).textContent = value;

        list.appendChild(newRow);
      });
    };

    updateUI();
  });
})();
