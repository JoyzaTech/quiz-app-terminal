const Feedback = ({ isCorrect, correctAnswer }) => {
    return (
      <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
        {isCorrect ? 'Correct!' : `Incorrect. The correct answer is: ${correctAnswer}`}
      </div>
    );
  };
  
  export default Feedback;