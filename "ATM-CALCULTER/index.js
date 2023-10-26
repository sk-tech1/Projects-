import inquirer from "inquirer";
async function main() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "Kindly Enter your Id:",
        },
        {
            type: "number",
            name: "userPin",
            message: "Kindly Enter your PIN:",
        },
        {
            type: "list",
            name: "accountType",
            choices: ["current", "saving"],
            message: "Select your account type:",
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Fast Cash", "Withdraw"],
            message: "Select your transaction",
            when: (answers) => answers.accountType !== undefined,
        },
        {
            type: "list",
            name: "amount",
            choices: ["1000", "2000", "20000"],
            message: "Select your amount",
            when: (answers) => answers.transactionType === "Fast Cash",
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount",
            when: (answers) => answers.transactionType === "Withdraw",
        },
    ]);
    if (answer.userId && answer.userPin) {
        const balance = Math.floor(Math.random() * 100000);
        console.log("Your current balance is", balance);
        const enteredAmount = answer.amount;
        if (balance >= enteredAmount) {
            const remaining = balance - enteredAmount;
            console.log("Your remaining balance is", remaining);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}
main();
