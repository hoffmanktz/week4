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




// Add penguin constructor (player name, penguin name, gender, pengiun type, penguin pebbles)

// Math game function (earn or lose penguin pebbles)

// Penguin trick 1

// Penguin trick 2

// Penguin trick 3

// view penguin pebbles balance








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
