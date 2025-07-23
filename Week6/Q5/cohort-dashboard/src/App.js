import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <h1>My Academy Dashboard</h1>
      <CohortDetails name="React Bootcamp" trainer="Alice" status="ongoing" />
      <CohortDetails name="Angular Batch" trainer="Bob" status="completed" />
    </div>
  );
}

export default App;
