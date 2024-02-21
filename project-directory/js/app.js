'use strict';

// Function to prompt user for their name
function promptForName() {
  return prompt('Welcome! What is your name?');
}

// Function to display a custom welcome message
function displayWelcomeMessage(userName) {
  let welcomeSection = document.getElementById('welcome-message');
  let welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = 'WELCOME TO THE SITE, ' + userName.toUpperCase() + '!';
  welcomeSection.appendChild(welcomeMessage);
}

// Function to ask yes/no questions
function askQuestions() {
  // Prompt user for their name
  let userName = promptForName();

  // Display custom welcome message
  displayWelcomeMessage(userName);


  // Array of questions
  let questions = [
    'Is the sky blue?',
    'Is water wet?',
    'Does 5+5=10?',
    'Is the earth flat?',
    'Is fire cold?'
  ];

  // Array of correct answers
  let correctAnswers = ['YES', 'YES', 'YES', 'NO', 'NO'];

  // Array to store user's answers
  let userAnswers = [];

  // Loop through each question
  for (let i = 0; i < questions.length; i++) {
    let answeredCorrectly = false;

    while (!answeredCorrectly) {
      // Prompt the user for an answer
      let userAnswer = prompt(questions[i]).toUpperCase();

      // Validate user's answer
      if (userAnswer === 'YES' || userAnswer === 'NO') {
        // Check if user's answer is correct
        if (userAnswer === correctAnswers[i]) {
          // console.log('User answered correctly: Yes');
          alert('Correct!');
          // Store user's answer
          userAnswers.push(userAnswer);
          answeredCorrectly = true;
        } else {
          // console.log('User answered incorrectly: No');
          alert('Incorrect! Please try again.');
        }
      } else {
        // console.log('Invalid input. Please answer with \'yes\' or \'no\'.');
        alert('Invalid input. Please answer with \'yes\' or \'no\'.');
      }
    }
  }

  // Display user's answers in the console
  console.log('User\'s answers:', userAnswers);
}

// Call the function to ask questions
askQuestions();

const button = document.querySelector('#quizButton');
button.onclick = function() {quiz();};

function quiz() {

  let questions = [
    'Is the sky blue?',
    'Is water wet?',
    'Does 5+5=10?',
    'Is the earth flat?',
    'Is fire cold?'
  ];

  // Array of correct answers
  let correctAnswers = ['YES', 'YES', 'YES', 'NO', 'NO'];

  // Array to store user's answers
  let userAnswers = [];

  // Loop through each question
  for (let i = 0; i < questions.length; i++) {
    let answeredCorrectly = false;

    while (!answeredCorrectly) {
      // Prompt the user for an answer
      let userAnswer = prompt(questions[i]).toUpperCase();

      // Validate user's answer
      if (userAnswer === 'YES' || userAnswer === 'NO') {
        // Check if user's answer is correct
        if (userAnswer === correctAnswers[i]) {
          // console.log('User answered correctly: Yes');
          alert('Correct!');
          // Store user's answer
          userAnswers.push(userAnswer);
          answeredCorrectly = true;
        } else {
          // console.log('User answered incorrectly: No');
          alert('Incorrect! Please try again.');
        }
      } else {
        // console.log('Invalid input. Please answer with \'yes\' or \'no\'.');
        alert('Invalid input. Please answer with \'yes\' or \'no\'.');
      }
    }
  }

  // Display user's answers in the console
  console.log('User\'s answers:', userAnswers);
}


