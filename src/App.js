import React, { useState, useEffect } from "react";
import questions from "./data/questions.json";
import "./App.css";

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Simulate boot process
  useEffect(() => {
    setTimeout(() => setIsBooting(false), 3000); // Boot screen for 3 seconds
  }, []);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (isBooting) {
    return <div className="boot-screen">Initializing Quiz Terminal...</div>;
  }

  return (
    <div className="app">
      <h1>Quiz App Terminal</h1>
      {currentQuestion < questions.length ? (
        <>
          <h2>
            Question {currentQuestion + 1}: {questions[currentQuestion].question}
          </h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className={selectedOption === option ? "option selected" : "option"}
                onClick={!isAnswered ? () => handleAnswer(option) : null}
              >
                {option}
              </li>
            ))}
          </ul>
          {isAnswered && (
            <p
              className={`feedback ${
                selectedOption === questions[currentQuestion].answer
                  ? "correct"
                  : "incorrect"
              } blink`}
            >
              {selectedOption === questions[currentQuestion].answer
                ? "Correct!"
                : `Incorrect. The correct answer is: ${questions[currentQuestion].answer}`}
            </p>
          )}
          <button onClick={handleNextQuestion} disabled={!isAnswered}>
            Next Question
          </button>
          <p>Score: {score}</p>
        </>
      ) : (
        <h2>Your final score: {score}</h2>
      )}
    </div>
  );
}

export default App;