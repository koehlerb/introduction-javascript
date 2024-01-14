/* Use the prompt() function to initialize variables for the:
- client name
- address
- city
- province
- postal code

Use the parseInt(prompt()) functions to initialize variables for the:
- lot area
- dwelling area
- number of bathrooms
- number of kitchens

Estimate the value of the property as follows:
- each square foot of lot area contributes $50
- each square foot of dwelling are contributes $200
- each bathroom contributes $10,000
- each kitchen contributes $25,000
*/
let clientName = prompt('Client Name: ');
let clientMessage = 'Prepared for ' + clientName;
let address = prompt('Address: ');
let city = prompt('City: ');
let province = prompt('Province: ');
let postalCode = prompt('Postal Code: ');
let lotArea = parseInt(prompt('Lot Area: '));
let dwellingArea = parseInt(prompt('Dwelling Area: '));
let numberOfBathrooms = parseInt(prompt('Number of Bathrooms: '));
let numberOfKitchens = parseInt(prompt('Number of Kitchens: '));
let estimate = (lotArea * 50) + (dwellingArea * 200) + (numberOfBathrooms * 10000) + (numberOfKitchens * 25000);
let ele = document.getElementById('sect2');
ele.innerHTML = `<p>${clientMessage} </p> `;
ele.innerHTML += `<p>Lot Area: ${lotArea} </p> `;
ele.innerHTML += `<p>Dwelling Area: ${dwellingArea} </p> `;
ele.innerHTML += `<p>Number of Bathrooms: ${numberOfBathrooms} </p> `; 
ele.innerHTML += `<p>Number of Kitchens: ${numberOfKitchens} </p> `;
ele.innerHTML += `<p>Estimate: $${estimate} </p> `;
