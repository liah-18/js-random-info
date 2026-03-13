// create an array of information
var infoArray =  [
  "Ivan",
  "Cookie",
  "Vlad",
  "Demeter",
  "Josie",
  "Gomez"
];

function showInfo() {

// generate a random number based on the number of items in the array
  var randomNumber = Math.floor(Math.random() * infoArray.length);

// select one random item from the array
  var randomInfo = infoArray[randomNumber];

// find the element on the page
  var infoElement = document.getElementById("info");

// display the random item
  infoElement.textContent = randomInfo;

}

