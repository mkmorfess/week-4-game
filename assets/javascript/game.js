var targetNumber = Math.floor(Math.random() * 90) + 10;

$("#randomNumber").html(targetNumber);

var counter = 0;

var wins = 0;

var losses = 0;



for (var i = 1; i < 5; i++) {

	var numberOptions = Math.floor(Math.random() * 9) + 1;

	var imageCrystal = $("<img class='crystalMargin' width='50' height='50'>");

	imageCrystal.addClass("crystal-image");

	imageCrystal.attr("src", "assets/images/crystal" + [i] + ".jpg");

	imageCrystal.attr("data-crystalvalue", numberOptions);

	$("#crystals").append(imageCrystal)


};

function resetGame() {

	counter = 0;
	targetNumber = Math.floor(Math.random() * 90) + 10;

	$("#randomNumber").html(targetNumber);
	$("#yourScore").html(counter)

	
};

$(".crystal-image").on("click", function() {

var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

counter += crystalValue;

if (counter === targetNumber) {
	alert("You win!");
	resetGame();
	wins++
	var updateGame = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>";
	$("#updateGame").html(updateGame);

}

else if (counter >= targetNumber) {
	alert("You Lose!")
	resetGame();
	losses++
	var updateGame = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>";
	$("#updateGame").html(updateGame);
}

else {
	$("#yourScore").html(counter);
}



});