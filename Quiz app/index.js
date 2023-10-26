import inquirer from "inquirer";
// Define the quiz questions
const questions = [
    {
        type: 'list',
        name: 'capital',
        message: 'What is the capital of Pakistan?',
        choices: ['Islamabad', 'Karachi', 'Lahore', 'Peshawar'],
    },
    {
        type: 'list',
        name: 'currency',
        message: 'What is the currency of Pakistan?',
        choices: ['Rupee', 'Dollar', 'Euro', 'Pound'],
    },
    {
        type: 'list',
        name: 'language',
        message: 'What is the official language of Pakistan?',
        choices: ['Urdu', 'English', 'Hindi', 'Arabic'],
    },
    {
        type: 'list',
        name: 'population',
        message: 'What is the approximate population of Pakistan?',
        choices: ['100 million', '223 million', '300 million', '400 million'],
    },
    {
        type: 'list',
        name: 'area',
        message: 'What is the total area of Pakistan in square kilometers?',
        choices: ['500,000 sq km', '600,000 sq km', '700,000 sq km', '800,000 sq km'],
    },
];
// Define the correct answers
const answers = {
    capital: 'Islamabad',
    currency: 'Rupee',
    language: 'Urdu',
    population: '223 million',
    area: '700,000 sq km',
};
// Initialize the score for the quiz
let score = 0;
// Prompt the user to answer the questions
inquirer.prompt(questions).then((userAnswers) => {
    // Compare user answers with correct answers
    for (const question in userAnswers) {
        if (userAnswers[question] === answers[question]) {
            // Increment the score for correct answers
            score++;
        }
        else {
            // Display a message for incorrect answers
            console.log(`You got question ${question} wrong. The correct answer is ${answers[question]}.`);
        }
    }
    // Display the result of the quiz
    if (score === questions.length) {
        console.log('Congratulations! You got all of the questions right.');
    }
    else {
        console.log(`You scored ${score} out of ${questions.length}.`);
    }
});
