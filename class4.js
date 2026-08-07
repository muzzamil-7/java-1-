var city = prompt('Enter city name');
var initialcharacter = city.slice(0,1);
var remainingcharacter =city.slice(1);
console.log(initialcharacter.toUppercase() = remainingcharacter.toLowercase());

var month = prompt('Enter month name');
if(month.length > 3) {
var month = month.slice(0,3);
}

console.log(month);

var str = prompt("Enter some text");

var numChars =str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === "  ") {
        alert("No double spaces!");
        break;
    }
}


function submit() {
  var userInput = document.getElementById("textarea").value;
  var output = document.getElementById("output");

  // 1 -> userInput.slice(0, 6) --> Enemie
  // 2 -> userInput.slice(1, 7) --> nemie

  // 18 -> userInput.slice(18, 24) --> Israel

  for (var i = 0; i < userInput.length; i++) {
    if (userInput.slice(i, i + 6) === "Israel") {
      userInput = userInput.slice(0, i) + "*******" + userInput.slice(i + 7);
    }
  }

  // Enemie of Pak are Israel and USA
  output.innerHTML = userInput;

  console.log(userInput);
}


function submit() {
  var userInput = document.getElementById("textarea").value;
  var output = document.getElementById("output");
  var textIndex = userInput.indexof('Israel');

  // 1 -> userInput.slice(0, 6) --> Enemie
  // 2 -> userInput.slice(1, 7) --> nemie

  // 18 -> userInput.slice(18, 24) --> Israel

userInput = userInput.slice(0, textIndex) + "******" + userInput(i+textIndex);

  // Enemie of Pak are Israel and USA
  output.innerHTML = userInput;

  console.log(userInput);
}

var string = saylani;
console.log(string.charAt(string.length));


var string = saylani;
console.log(string.charAt(string.length));

var string = 'pakistan'
console.log(string.indexOf('i'));

var string2 = 'bubble'
console.log(string2.indexOf('b'));

console.log(string.charAt(3));


var string3 = 'hyderabad'
console.log(string2.indexOf('b'));

