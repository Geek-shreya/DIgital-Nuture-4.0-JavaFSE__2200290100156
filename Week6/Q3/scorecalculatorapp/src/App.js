import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>📘 Student Management Portal</h1>
      <CalculateScore 
        name="John Doe" 
        school="ABC School" 
        total={450} 
        goal={90} 
      />
    </div>
  );
}

export default App;
