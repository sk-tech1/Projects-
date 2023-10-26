import inquirer from "inquirer";
let todos = [];
let loop = true;
async function getInput() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "What do you want to add more todo?",
            default: false
        }
    ]);
    return answer;
}
async function main() {
    while (loop) {
        const answer = await getInput();
        const { todo, addmore } = answer;
        console.log(answer);
        loop = addmore;
        if (todo && todo.trim()) { // Check if 'todo' is defined and not an empty string
            todos.push(todo);
            console.log("Kindly add valid input");
        }
        console.log(todos);
    }
    if (todos.length > 0) {
        console.log("Your Todo list:\n");
        todos.forEach((todo) => {
            console.log(todo);
        });
    }
    else {
        console.log("No todos found");
    }
}
main(); // Call the main function to start the program
