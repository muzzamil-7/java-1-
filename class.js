// var temperatureInCelsius = +prompt("Enter temperature in celsius", "32");

// var temperatureInFarenheit = (temperatureInCelsius * 9) / 5 + 32;

// console.log("Temperaure in Farenheit is: " +  temperatureInFarenheit);



// var applePrice = 32;
// var bananaPrice = 20; 
// var shippingCharges = 200;

// var appleQuantity = +prompt("Enter apple quantity");
// var bananaQuantity = +prompt("Enter apple quantity");


// var ObtainedMarks =+prompt("Enter obatained marks");
// var totalMarks =+prompt("Enter  totalmarks");
// var percentage = (ObtainedMarks / totalMarks) *100;

// document.write("Total marks : ")

function submitAge() {
    var currentUserAge = Number(document.getElementById("age").value);
    var institue = document.getElementById("institute").value;

    console.log(institute, 'institute');
    var isUserAllowed;

    if ((currentUserAge === 17 || currentUserAge === 18) && institue === 'saylani') {
        isUserAllowed = true;
    }

    console.log(isUserAllowed);
}
