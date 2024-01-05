'use strict';

(() => {
  window.addEventListener('load', (event) => {
    // update document content
    const setContent = (id, type) => {
      const value = eval(id);
      let OK = false;
      let text = 'Uh-oh!';
      switch (typeof value) {
        case 'string':
          if (type == 'ordinary') {
            text = value;
            OK = true;
          }
          break;
        case 'number':
          if (type == 'ordinary') {
            text = value;
            OK = true;
          }
          if (type == 'dollar') {
            text = '$' + value.toFixed(2);
            OK = true;
          }
          if (type == 'percent') {
            text = (value * 100).toFixed(2) + '%';
            OK = true;
          }
          break;
      }
      if (OK) document.getElementById(id).textContent = text;
    };

    // ordinary values
    [
      'clientMessage',
      'address',
      'city',
      'province',
      'postalCode',
      'lotArea',
      'dwellingArea',
      'numberOfBathrooms',
      'numberOfKitchens',
    ].map((id) => setContent(id, 'ordinary'));

    // dollar values
    ['estimate'].map((id) => setContent(id, 'dollar'));

    // percent values
    [].map((id) => setContent(id, 'percent'));
  });
})();
