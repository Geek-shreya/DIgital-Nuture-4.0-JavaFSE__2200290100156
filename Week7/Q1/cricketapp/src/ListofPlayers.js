import React from 'react';

const ListofPlayers = () => {
  // Declare array with 11 players and scores using map
  const players = [
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 75 },
    { name: 'Gill', score: 65 },
    { name: 'KL Rahul', score: 40 },
    { name: 'Hardik', score: 85 },
    { name: 'Pant', score: 50 },
    { name: 'Jadeja', score: 60 },
    { name: 'Bumrah', score: 72 },
    { name: 'Shami', score: 35 },
    { name: 'Kuldeep', score: 95 },
    { name: 'Surya', score: 55 }
  ].map((player) => player);  // using map feature

  // Filter players with score below 70 using arrow function
  const below70 = players.filter((p) => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p,i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
      <h3>Players with score below 70</h3>
      <ul>
        {below70.map((p,i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
