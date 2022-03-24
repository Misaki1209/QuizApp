const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex, Score

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {

    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best football player?',
    answers: [
      { text: 'Leo Messi', correct: true },
      { text: 'Lionel Messi', correct: true },
      { text: 'La Pulga', correct: true },
      { text: 'M10', correct: true }
    ]
  },
  {
    question: 'What does "ありがとうございます" mean?',
    answers: [
      { text: 'Thank you!', correct: true },
      { text: 'Fuck you!', correct: false },
      { text: 'Hello!', correct: false },
      { text: "What's up?", correct: false }
    ]
  },
  {
    question: 'How many months have 28 days in them?',
    answers: [
      { text: '12', correct: false },
      { text: '10', correct: false },
      { text: '11', correct: false },
      { text: '13', correct: true }
    ]
  },
  {
    question: 'Which country do kiwi fruit originate from?',
    answers: [
      { text: 'USA', correct: false },
      { text: 'New Zealand', correct: false },
      { text: 'China', correct: true },
      { text: 'Brazil', correct: false }
    ]
  },
  {
    question: 'Which sea creature has three hearts?',
    answers: [
      { text: 'Shark', correct: false },
      { text: 'Shrimp', correct: false },
      { text: 'Octopus', correct: true },
      { text: 'Jelly Fish', correct: false }
    ]
  },
  {
    question: 'How long is an Olympic swimming pool (in meters)?',
    answers: [
      { text: '40', correct: false },
      { text: '50', correct: true },
      { text: '60', correct: false },
      { text: '100', correct: false }
    ]
  },
  {
    question: 'How many languages are written from right to left',
    answers: [
      { text: '11', correct: false },
      { text: '9', correct: false },
      { text: '12', correct: true },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'What was the first soft drink in space?',
    answers: [
      { text: 'Fanta', correct: false },
      { text: 'Pepsi', correct: false },
      { text: '7-ups', correct: false },
      { text: 'Coca-cola', correct: true }
    ]
  },
  {
    question: 'Dump, floater, and wipe are terms used in which team sport?',
    answers: [
      { text: 'Football', correct: false },
      { text: 'Volleyball', correct: true },
      { text: 'Basketball', correct: false },
      { text: 'Tennis', correct: false }
    ]
  }
]