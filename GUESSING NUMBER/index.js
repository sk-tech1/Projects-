import inquirer from "inquirer";
async function startGame() {
    console.log("Welcome to the Guessing Game!");
    while (true) {
        let systemGeneratedNo = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        let correct = false;
        while (!correct) {
            const userGuessAnswer = await inquirer.prompt({
                type: "number",
                name: "userGuess",
                message: "Guess the number (1-10):",
            });
            const userGuess = userGuessAnswer.userGuess;
            if (userGuess === systemGeneratedNo) {
                console.log("Congratulations! Your guess is correct.");
                correct = true;
            }
            else {
                console.log(`Oops! Your guess is incorrect. The correct answer was ${systemGeneratedNo}.`);
            }
            // Generate a new random number for the next game
            systemGeneratedNo = Math.floor(Math.random() * 10) + 1;
        }
        const playAgainAnswer = await inquirer.prompt({
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?",
        });
        if (!playAgainAnswer.playAgain) {
            console.log("Thanks for playing! Goodbye.");
            break;
        }
    }
}
startGame();
