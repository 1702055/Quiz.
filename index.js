const questions = [
    {
      question: "O que são números binários?",
      options: ["A) Números que utilizam apenas os dígitos 0 e 1.",
                "B) Números que utilizam os dígitos de 0 a 9.",
                "C) Números que utilizam os dígitos de 1 a 9.",
                "D) Números que utilizam apenas os dígitos 0, 1, 2 e 3."],
      answer: "A) Números que utilizam apenas os dígitos 0 e 1."
    },
    {
      question: "Qual é o sistema de numeração utilizado pelos computadores para representar dados?",
      options: ["A) Sistema Decimal.",
                "B) Sistema Binário.",
                "C) Sistema Hexadecimal.",
                "D) Sistema Octal."],
      answer: "B) Sistema Binário."
    },
    // Outras perguntas...
  ];
  
  let currentQuestion = 0;
  let correctAnswers = 0;
  let wrongAnswers = 0;
  
  const questionPage = document.getElementById('question-page');
  const resultPage = document.getElementById('result-page');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');
  const restartButton = document.getElementById('restart-btn');
  const correctAnswerElement = document.getElementById('correct-answer');
  const wrongAnswerElement = document.getElementById('wrong-answer');
  
  nextButton.addEventListener('click', nextQuestion);
  restartButton.addEventListener('click', restartQuiz);
  
  showQuestion(currentQuestion);
  
  function showQuestion(questionIndex) {
    const q = questions[questionIndex];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
    q.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option-box');
      button.addEventListener('click', () => checkAnswer(option, q.answer));
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
      correctAnswers++;
    } else {
      wrongAnswers++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionPage.style.display = 'none';
    resultPage.style.display = 'block';
    correctAnswerElement.textContent = `Respostas corretas: ${correctAnswers}`;
    wrongAnswerElement.textContent = `Respostas erradas: ${wrongAnswers}`;
  }
  
  function nextQuestion() {
    showQuestion(currentQuestion);
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    questionPage.style.display = 'block';
    resultPage.style.display =
  
  
  
  
  