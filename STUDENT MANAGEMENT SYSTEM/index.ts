import inquirer from 'inquirer';

interface Student {
    id: string;
    name: string;
    age: number;
    coursesEnrolled: string;
    fee: number;
}

const students: Student[] = [];

function generateUniqueID(): string {
    let id: string;
    do {
        id = Math.floor(10000 + Math.random() * 90000).toString();
    } while (students.some(student => student.id === id));
    return id;
}

async function addStudent() {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "Enter the name of the student:",
            validate: (input: string) => input.trim() !== "", // Specify the type as string
        },
        {
            type: "number",
            name: "age",
            message: "Enter age of the student:",
            validate: (input: number) => !isNaN(input) && input > 0, // Specify the type as number
        },
        {
            type: "list",
            name: "coursesEnrolled",
            message: "Please select your course:",
            choices: ["MATH", "HISTORY", "ART", "SCIENCE", "ENGLISH"],
        },
    ];
    
    

    const answers = await inquirer.prompt(questions);

    const newStudent: Student = {
        id: generateUniqueID(),
        name: answers.name,
        age: answers.age,
        coursesEnrolled: answers.coursesEnrolled,
        fee: 1500,
    };

    students.push(newStudent);

    console.log(`Student added successfully!`);
    console.log(`ID: ${newStudent.id}`);
    console.log(`Name: ${newStudent.name}`);
    console.log(`Course: ${newStudent.coursesEnrolled}`);
    console.log(`Fee: ${newStudent.fee}`);

    const { continueAdding } = await inquirer.prompt([
        {
            type: "confirm",
            name: "continueAdding",
            message: "Do you want to add another student?",
        }
    ]);

    if (continueAdding) {
        addStudent();
    } else {
        console.log('Bye!');
    }
}

addStudent();
