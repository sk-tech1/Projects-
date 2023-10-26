import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "please input your no:"
    },
    { type: "number",
        name: "numberTwo",
        message: "please input your no:"
    },
    { type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Select operator:"
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    else {
        console.log("Invalid operator");
        process.exit(1); // Terminate the program
    }
    console.log("Your result is:", result);
}
else {
    console.log("Kindly input valid numbers and operator");
}
