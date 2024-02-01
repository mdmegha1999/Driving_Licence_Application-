import React from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css'; 

const Results = () => {
  const location = useLocation();
  const { score, questions, userAnswers } = location.state || {};

  if (!score || !questions || !userAnswers) {
    return <div className="results-container">No results available.</div>;
  }

  return (
    <div className="results-container">
      <h2>Results</h2>
      <p>Your Score: {score}</p>
      <p className={score >= questions.length / 2 ? 'pass-message' : 'fail-message'}>
        {score >= questions.length / 2 ? 'Congratulations! You passed.' : 'Sorry, you failed.'}
      </p>
      <h3>Breakdown:</h3>
      {questions.map((question) => (
        <div key={question.id} className="question-container">
          <p>{question.text}</p>
          <p className={userAnswers[question.id] === question.correctAnswer ? 'correct-answer' : 'incorrect-answer'}>
            Your Answer: {userAnswers[question.id]}, Correct Answer: {question.correctAnswer}
            {userAnswers[question.id] === question.correctAnswer ? ' (Correct)' : ' (Incorrect)'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Results;
