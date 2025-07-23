import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = (total / 5).toFixed(2); // Assuming 5 subjects

  return (
    <div className="score-container">
      <h2>🎓 Name: {name}</h2>
      <h3>🏫 School: {school}</h3>
      <p>📊 Total Marks: {total}</p>
      <p>🎯 Goal: {goal}</p>
      <p className="average">🧮 Average Score: {average}</p>
    </div>
  );
}

export default CalculateScore;
