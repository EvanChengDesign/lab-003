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
    'Is fire cold?',
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


//  This is the function for asking 6th question with numerical input

function guessAgeGame() {
  const correctAge = 27;
  const maxAttempts = 4;

  for (let i = 1; i <= maxAttempts; i++) {
    const guess = prompt(`Attempt ${i}: Guess my age (between 1 and 100):`);

    console.log(`Attempt ${i}: Input: ${guess}`);

    // checks if the input is a number
    if (!isNaN(guess)) {
      const guessNumber = parseInt(guess, 10); // converts the input string to a number

      if (guessNumber === correctAge) {
        console.log(`Attempt ${i}: Correct answer`);
        alert(`Congratulations! You guessed my age (${correctAge}) correctly in ${i} attempt(s).`);
        return;
      } else if (guessNumber < correctAge) {
        console.log(`Attempt ${i}: Too low`);
        alert('Too low. Please try again!');
      } else {
        console.log(`Attempt ${i}: Too high`);
        alert('Too high. Please try again!');
      }
    } else {
      console.log(`Attempt ${i}: Invalid input`);
      alert('Invalid input. Please enter a number between 1 and 100.');
    }
  }

  console.log(`All attempts used. Correct Answer: ${correctAge}`);
  alert(`Sorry, you have used all your attempts. My correct age is ${correctAge}`);

}
// Call the function to start the game
guessAgeGame();


// This is the quiz button portion

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

  //  This is the function for asking 6th question with numerical input

  function guessAgeGame() {
    const correctAge = 27;
    const maxAttempts = 4;

    for (let i = 1; i <= maxAttempts; i++) {
      const guess = prompt(`Attempt ${i}: Guess my age (between 1 and 100):`);

      console.log(`Attempt ${i}: Input: ${guess}`);

      // checks if the input is a number
      if (!isNaN(guess)) {
        const guessNumber = parseInt(guess, 10); // converts the input string to a number

        if (guessNumber === correctAge) {
          console.log(`Attempt ${i}: Correct answer`);
          alert(`Congratulations! You guessed my age (${correctAge}) correctly in ${i} attempt(s).`);
          return;
        } else if (guessNumber < correctAge) {
          console.log(`Attempt ${i}: Too low`);
          alert('Too low. Please try again!');
        } else if (guessNumber > correctAge) {
          console.log(`Attempt ${i}: Too high`);
          alert('Too high. Please try again!');
        }
      } else {
        console.log(`Attempt ${i}: Invalid input`);
        alert('Invalid input. Please enter a number between 1 and 100.');
      }
    }

    console.log(`All attempts used. Correct Answer: ${correctAge}`);
    alert(`Sorry, you have used all your attempts. My correct age is ${correctAge}`);

  }
  // Call the function to start the game
  guessAgeGame();

}

// This is the 2 quiz button portion

const button2 = document.querySelector('#quizButton2');
button2.onclick = guessingGame;

function guessingGame() {
  const questions = [
    'What is the capital of France?',
    'What is the largest planet in our solar system?',
    'What is the chemical symbol for water?',
    'Who wrote \'The Gettysburg Address\'?',
    'In what year did the USA declare independence?',
    'How many states are there in the USA?',
    'Name a primary color',
  ];

  const answers = [
    'Paris',
    'Jupiter',
    'H2O',
    ['Abraham Lincoln', 'Lincoln'],
    '1776',
    '50',
    ['Red', 'Yellow', 'Blue'],

  ];

  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const guess = prompt(`Question ${i + 1}: ${questions[i]}`);
    const correctAnswer = answers[i];

    if (Array.isArray(correctAnswer)) {
      // Convert both guess and correct answers to lowercase for comparison
      const lowerCaseGuess = guess.toLowerCase();
      const lowerCaseCorrectAnswers = correctAnswer.map(answer => answer.toLowerCase());

      if (lowerCaseCorrectAnswers.includes(lowerCaseGuess)) {
        score++;
        alert(`Correct! The possible correct answers are: ${correctAnswer.join(', ')}`);
      } else {
        // Display the correct answers even if the user's input is incorrect
        alert(`Incorrect! The correct answer(s) is/are: ${correctAnswer.join(', ')}`);
      }
    } else {
      if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        alert('Correct!');
      } else {
        // Display the correct answer even if the user's input is incorrect
        alert(`Incorrect! The correct answer is: ${correctAnswer}`);
      }
    }
  }
  alert(`You got ${score} out of ${questions.length} questions correct.`);
}
