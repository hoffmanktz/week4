/*

For this assessment, you're going to build a game called PenguinPop. When the game starts, the user should be prompted to:

1.) Enter his/her name
2.) Name his/her penguin
3.) Decide if the penguin is male or female
4.) Decide if the penguin is an Emperor, Gentoo, or rockhopper penguin

The user's penguin should be represented by an object.

Once the player has entered his/her name, the program should address him/her by name in all future prompts, and should refer to his/her penguin by name as well.

- In the game, the user should have to answer simple math questions (for Version 1 of your game, you can use addition problems only) to earn a virtual currency known as PenguinPebbles
- For each correct answer, the user should get 5 PenguinPebbles
- For each incorrect answer, the user should lose 5 PenguinPebbles
- When the user gets 20 or more pebbles, they can "spend" their PenguinPebbles to make their penguin do a trick
- The penguin should be able to do at least (3) different tricks, each of which costs a different number of PenguinPebbles

*/
var sget = require("sget");
var playerName;
var penguinName;
var penguinPebblesBalance = 0;
var penguinArray = [];

// Main menu
var mainMenu = {
	welcome: "Let's play Penguin Pop!\n\n",
	math: "1. Earn Penguin Pebbles by solving really easy math problems",
	tricks: "2. Teach your Penguin a new trick",
	view: "3. View your Penguin Pebbles Balance",
	exit: "4. Exit Penguin Pop"
};

var tricksMenu = {
	welcome: "Make your penguin do a trick!\n\n",
	jump: "1. Have your penguin compete in the long jump",
	fish: "2. Have your penguin catch a fish with a fishing pole",
	guitar: "3. Have your penguin play you a song on the guitar",
	back: "4. Back to the main menu"
 };


// Print Main menu
var printMenu = function() {
    for (var key in mainMenu) {
      console.log(mainMenu[key]);
    }
};

// Print Main menu
var printTricksMenu = function() {
    for (var key in tricksMenu) {
      console.log(tricksMenu[key]);
    }
};

// Add penguin constructor (player name, penguin name, gender, pengiun type, penguin pebbles)
var penguin = function(playerName, penguinName, penguinGender, penguinType) {
    this.playerName = playerName;
    this.penguinName = penguinName;
    this.penguinGender = penguinGender;
    this.penguinType = penguinType;
    this.penguinPebbles = 0;
    	// this.addPebbles = function() {
    	// 	this.penguinPebbles++;
     //    	console.log(this.penguinName+ " now has "  + this.penguinPebbles + " Penguin Pebbles.");
    	// };
    	// this.minusPebbles = function() {
    	// 	this.penguinPebbles--;
    	// 	console.log(this.penguinName+ " now has " + this.penguinPebbles + " Penguin Pebbles.");
    	// };
};


// Math game function (earn or lose penguin pebbles)
function ask() {
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    console.log("What is the answer? " + a + " + " + b);
    var userAnswer = sget("Answer: ").trim();
    var sum = a + b;
    
    	if (userAnswer == sum) {
    		console.log("Correct! You get 5 Penguin Pebbles!");
    		penguinPebblesBalance = penguinPebblesBalance + 5;
    	} else if (userAnswer !== sum) {
    		console.log("Incorrect! You lose 5 Penguin Pebbles!");
    		penguinPebblesBalance = penguinPebblesBalance - 5;
    	}
    returnToMain();
    penguinPop();
 

}

// Penguin trick function

var tricks = function() {
	sleep(400);
	wipeScreen();
	printTricksMenu();
	var userSelect = sget("What would you like to do?\n").trim();
	userSelect = userSelect.toLowerCase();

		if(userSelect == 1) {
        	jump();
        } else if(userSelect == 2) {
        	fish();
        } else if(userSelect == 3) {
        	guitar();
        } else if(userSelect == 4) {
        	penguinPop();
        } else {
            console.log("Invalid Selection. Please try again.");
           	tricks();
        }
};

// Penguin trick 1

var jump = function() {
	if(penguinPebblesBalance >= 20) {
		console.log("You've made " + penguinName + " compete in the long jump and " + penguinName + " jumped 20 feet!");
		penguinPebblesBalance = penguinPebblesBalance - 20;
		console.log("You now have " + penguinPebblesBalance + " Penguin Pebbles!");
		returnToMain();
		penguinPop();
	} else {
		console.log("You don't have enough Penguin Pebbles for this! You have " + penguinPebblesBalance + " Penguin Pebbles.\nPlay some math games to earn some!");
		returnToMain();
		printMenu();

	}	
};

// Penguin trick 2
var fish = function() {
	if(penguinPebblesBalance >= 20) {
		console.log("You've made " + penguinName + " fish with a fishing pole. You do know how penguins work, don't you?");
		penguinPebblesBalance = penguinPebblesBalance - 15;
		console.log("You now have " + penguinPebblesBalance + " Penguin Pebbles!");
		returnToMain();
		penguinPop();
	} else {
		console.log("You don't have enough Penguin Pebbles for this! You have " + penguinPebblesBalance + " Penguin Pebbles.\nPlay some math games to earn some!");
		returnToMain();
		printMenu();

	}
};

// Penguin trick 3
var guitar = function() {
	if(penguinPebblesBalance >= 20) {
		console.log("You've made " + penguinName + " serenade you with a guitar. A penguin of many talents.");
		penguinPebblesBalance = penguinPebblesBalance - 10;
		console.log("You now have " + penguinPebblesBalance + " Penguin Pebbles!");
		returnToMain();
		penguinPop();
	} else {
		console.log("You don't have enough Penguin Pebbles for this! You have " + penguinPebblesBalance + " Penguin Pebbles.\nPlay some math games to earn some!");
		returnToMain();
		printMenu();

	}
};

// view penguin pebbles balance

var view = function() {
	console.log("You have " + penguinPebblesBalance + " Penguin Pebbles!");
	returnToMain();
	penguinPop();
};



//----------------HELPFUL TOOLS---------------------------

// Exit Program function
var exit = function () {
	console.log("Goodbye!");
	sleep(800);
	process.exit();
};

// Return to main menu prompt function
var returnToMain = function () {
	var returnToMain = sget("\nPress enter to return to main menu..").trim();
};

//clean screen
var wipeScreen = function () {
  return process.stdout.write('\033c');
};

//sleep timer
var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

//-------------------------------------------------------

var penguinPopIntro = function() {
	sleep(400);
	wipeScreen();
	console.log("Welcome to Penguin Pop! Start by adding your penguin!\n");
	playerName = sget("What is your name?\n").trim();
    penguinName = sget("What is your penguin's name?\n").trim();

    var pickGender = function() {
    penguinGender = sget("Is your penguin a male or female? (male/female)\n").trim();
    penguinGender = penguinGender.toLowerCase();

    	if (penguinGender !== "female" && penguinGender !== "male") {
    		console.log("I know it's 2017, but you have to pick a gender for your penguin.");
    		sleep(1400);
    		pickGender();
    	}
    };
    pickGender();

    var pickPenguinType = function () {
    penguinType = sget("What kind of penguin is " + penguinName + " (Emperor, Gentoo, or Rockhopper)?\n").trim();
    penguinType = penguinType.toLowerCase();

    	if (penguinType != "emperor" && penguinType != "gentoo" && penguinType != "rockhopper") {
    		console.log("In these parts, there are only three kinds of penguins. Pick one of them.");
    		sleep(1400);
    		pickPenguinType();
    	}
    };
    pickPenguinType();

    newPenguin = new penguin(playerName, penguinName, penguinGender, penguinType);
    penguinArray.push(newPenguin);
	penguinPop();
};


var penguinPop = function() {
	sleep(400);
	wipeScreen();
	printMenu();
	var userSelect = sget("What would you like to do?\n").trim();
	userSelect = userSelect.toLowerCase();

		if(userSelect == 1) {
        	ask();
        } else if(userSelect == 2) {
        	tricks();
        } else if(userSelect == 3) {
        	view();
        } else if(userSelect == 4) {
            exit();
        } else {
            console.log("Invalid Selection. Please try again.");
           
        }
};




penguinPopIntro();
