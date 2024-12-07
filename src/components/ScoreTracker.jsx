const ScoreTracker = ({ score, questionNumber, totalQuestions }) => (
    <div className="score-tracker">
      <p>Score: {score}</p>
      <p>Question: {questionNumber} / {totalQuestions}</p>
    </div>
  );
  
  export default ScoreTracker;