import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
const getRandomOutcome = () => {
    const outcomes = [chalk.green("You defeated"), chalk.red("You were defeated")];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    return outcomes[randomIndex];
};
const startGame = async () => {
    const playerResponse = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Please Enter Your Name:",
    });
    const playerName = playerResponse.name;
    console.log(`Player's name: ${chalk.blue(playerName)}`);
    const opponents = [chalk.yellow("Skeleton"), chalk.yellow("Assassin"), chalk.yellow("Zombie")];
    const opponentResponse = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select Your Opponent",
        choices: opponents,
    });
    const selectedOpponent = opponentResponse.select;
    console.log(`Selected opponent: ${chalk.red(selectedOpponent)}`);
    const player = new Player(playerName);
    const opponent = new Opponent(selectedOpponent);
    console.log(`${chalk.blue(player.name)} vs ${chalk.red(opponent.name)}`);
    while (player.fuel > 0 && opponent.fuel > 0) {
        const actionResponse = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Action",
            choices: ["Attack", "Drink Potion", "Run For Your Life..."],
        });
        const selectedAction = actionResponse.opt;
        if (selectedAction == "Attack") {
            const num = Math.floor(Math.random() * 2);
            if (num === 0) {
                console.log(`${chalk.green("You defeated")} ${chalk.red(opponent.name)}!`);
                opponent.fuel -= 25; // Decrease opponent's fuel after being defeated
            }
            else {
                console.log(`${chalk.red(opponent.name)} ${chalk.red("defeated you")}!`);
                player.fuel -= 25; // Decrease player's fuel after being defeated
            }
        }
        else if (selectedAction == "Drink Potion") {
            player.fuel += 25;
            console.log(`${chalk.green("You")} drank a potion and gained 25 fuel.`);
        }
        else if (selectedAction == "Run For Your Life...") {
            console.log("You ran away from the battle.");
        }
        // Decrease opponent's and player's fuel
        player.fuelDecrease();
        opponent.fuelDecrease();
        // Display updated fuel levels
        console.log(`${chalk.blue(player.name)}'s Fuel: ${player.fuel}`);
        console.log(`${chalk.red(opponent.name)}'s Fuel: ${opponent.fuel}`);
    }
    if (player.fuel <= 0) {
        console.log(`${chalk.red(opponent.name)} wins. ${chalk.red("You lose")}!`);
    }
    else if (opponent.fuel <= 0) {
        console.log(`${chalk.blue(player.name)} wins. ${chalk.green("You win")}!`);
    }
    const continueResponse = await inquirer.prompt({
        type: "confirm",
        name: "continue",
        message: "Do you want to play again?",
    });
    if (continueResponse.continue) {
        startGame(); // Restart the game
    }
    else {
        console.log("Game over. Thanks for playing!");
    }
};
startGame();
