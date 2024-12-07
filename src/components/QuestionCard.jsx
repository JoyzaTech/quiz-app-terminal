import React from 'react';

const QuestionCard = ({ question, options, onSelect, selectedOption, isAnswered }) => {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => !isAnswered && onSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;