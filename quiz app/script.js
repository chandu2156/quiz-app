
    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionContainer = document.getElementById("options-container");
    const button = document.getElementById("submitbtn");
    const feedback = document.getElementById("feedback");
    const scoreDisplay = document.getElementById("score");

    let currentQuestionIndex = 0;
    let score = 0;

    const quizQuestions = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
      },
      {
        question: "What is the capital of Telangana?",
        options: ["Hyderabad", "Mumbai", "Delhi", "Chennai"],
        correctAnswer: "Hyderabad"
      },
      {
        question: "What is the capital of India?",
        options: ["Hyderabad", "Delhi", "Kolkata", "Chennai"],
        correctAnswer: "Delhi"
      }
    ];

    function loadQuestion() {
      const currentQuestion = quizQuestions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      optionContainer.innerHTML = "";
      feedback.textContent = "";

      currentQuestion.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = function () {
          selectAnswer(option, currentQuestion.correctAnswer);
        };
        optionContainer.appendChild(optionButton);
      });
    }

    function selectAnswer(selectedOption, correctAnswer) {
      if (selectedOption === correctAnswer) {
        feedback.textContent = "✅ Correct!";
        score++;
      } else {
        feedback.textContent = "Wrong Correct answer: " + correctAnswer;
      }
    }

    button.onclick = function () {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
      } else {
        showScore();
      }
    };

    function showScore() {
      quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} / ${quizQuestions.length}</p>
      `;
    }

    loadQuestion();
  