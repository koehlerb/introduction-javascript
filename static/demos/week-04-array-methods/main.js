'use strict';

(() => {
  window.addEventListener('load', (event) => {
    pushB.addEventListener('click', () => {
      myPush();
      updateUI();
    });
    popB.addEventListener('click', () => {
      myPop();
      updateUI();
    });
    shiftB.addEventListener('click', () => {
      myShift();
      updateUI();
    });
    unshiftB.addEventListener('click', () => {
      myUnshift();
      updateUI();
    });
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
