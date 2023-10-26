import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const startProgram = async (person) => {
    do {
        console.log("Welcome, guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Who would you like to talk to...",
            name: "Select",
            choices: ["Myself:Self", "Student"],
        });
        if (ans.Select == "Myself:Self") {
            console.log("I am talking to myself.");
            console.log("I am feeling good.");
        }
        if (ans.Select == "Student") {
            const ans2 = await inquirer.prompt({
                type: "input",
                message: "Which student would you like to talk to?",
                name: "student",
            });
            const student = persons.students.find((val) => val.name == ans2.student);
            if (!student) {
                const name = new Student(ans2.student);
                persons.addStudent(name);
                console.log(`Hello, I am ${name.name}, and I'm doing fine.`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello, I am ${student.name}, and I'm doing fine.`);
                console.log(persons.students);
            }
        }
    } while (true);
};
startProgram(persons);
