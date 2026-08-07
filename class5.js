function roll() {
    var output = document.getElementById('output');
    var randomNumber = Math.random();
    var roundoffNumber = Math.ceil(randomNumber * 6);

    output.innerHTML = roundoffNumber;
}

 var currentAge = prompt("Enter your age.");
 var yearsEligibleToVote = currentAge - 18;
