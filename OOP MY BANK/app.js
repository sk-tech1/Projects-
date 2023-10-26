import * as readline from 'readline';
class Customer {
    firstName;
    lastName;
    age;
    gender;
    mobileNumber;
    accountBalance;
    constructor(firstName, lastName, age, gender, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountBalance = 0; // Initial balance is 0
    }
    getAccountBalance() {
        return this.accountBalance;
    }
    debit(amount) {
        if (amount <= 0) {
            return "Invalid debit amount. Amount must be greater than 0.";
        }
        if (this.accountBalance < amount) {
            return "Insufficient funds. Debit transaction canceled.";
        }
        else {
            this.accountBalance -= amount;
            return "Debit successful.";
        }
    }
    credit(amount) {
        if (amount <= 0) {
            return "Invalid credit amount. Amount must be greater than 0.";
        }
        if (amount > 100) {
            this.accountBalance += amount - 1; // Deduct $1 for credit over $100
        }
        else {
            this.accountBalance += amount;
        }
        return "Credit successful.";
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter First Name: ', (firstName) => {
    rl.question('Enter Last Name: ', (lastName) => {
        rl.question('Enter Age: ', (ageStr) => {
            const age = parseInt(ageStr, 10);
            rl.question('Enter Gender: ', (gender) => {
                rl.question('Enter Mobile Number: ', (mobileNumber) => {
                    const customer = new Customer(firstName, lastName, age, gender, mobileNumber);
                    console.log(`Customer created: ${firstName} ${lastName}`);
                    console.log(`Initial Account Balance: $${customer.getAccountBalance()}`);
                    rl.question('Enter Debit Amount: ', (debitAmountStr) => {
                        const debitAmount = parseFloat(debitAmountStr);
                        const debitResult = customer.debit(debitAmount);
                        console.log(debitResult);
                        console.log(`Account Balance after Debit: $${customer.getAccountBalance()}`);
                        rl.question('Enter Credit Amount: ', (creditAmountStr) => {
                            const creditAmount = parseFloat(creditAmountStr);
                            const creditResult = customer.credit(creditAmount);
                            console.log(creditResult);
                            console.log(`Account Balance after Credit: $${customer.getAccountBalance()}`);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});
