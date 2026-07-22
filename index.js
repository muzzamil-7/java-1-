var number1 = +prompt('Enter number 1')
var operator = prompt('Enter operator')
var number2 = +prompt('Enter number 2')

var output = document.getElementById("output");

if (operator === "+") {
    output.innerHTML = number1 + number2;
} else if (operator === "-") {
    output.innerHTML = number1 - number2;
} else if (operator === "*") {
     output.innerHTML = number1 * number2;
}  else if (operator === "/") {
     output.innerHTML = number1 / number2;
}   else {
    output.innerHTML = "Invalid Input Provided"
}














// var number1 = prompt('Enter number 1')
// // console.log(number1)

//  var operator = prompt('Enter operator')
// //  console.log(operator)

//  var number2 = prompt('Enter number 2')
// // console.log(number2)

//  var output = document.getElementById("output");
//  console.log(output)

//  if (opertaor === "+") {
//     output.innerHTML = Number(number1) + Number(number2);
//  } else {

//  }

// var num1 = Number(prompt("Enter number 1"));
// var operator = prompt("Enter operator");
// var num2 = Number(prompt("Enter number 2"));

// var output = document.getElementById("output");

// if (operator === "+") {
//     output.innerHTML = num1 + num2;
// }



// function increment() {
//     var output = document.getElementById("output");

//     output.innerHTML = Number(output.innerHTML) + 1;
// }

// function decrement() {
//     var output = document.getElementById("output");

//     output.innerHTML = Number(output.innerHTML) - 1;
// }

