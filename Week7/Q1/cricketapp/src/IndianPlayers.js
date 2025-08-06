import React from 'react';

const IndianPlayers = () => {
  // Destructuring odd and even
  let oddTeam = ['Virat','Gill','Hardik','Pant','Bumrah'];
  let evenTeam = ['Rohit','KL Rahul','Jadeja','Shami','Surya'];
  const [o1,o2,o3,o4,o5] = oddTeam;
  const [e1,e2,e3,e4,e5] = evenTeam;

  // Merge two arrays using ES6 spread
  let T20players = ['Virat','Rohit','Pant'];
  let RanjiTrophy = ['Rahane','Pujara','Sarfaraz'];
  let merged = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Destructured Odd Team Players</h2>
      <p>{o1}, {o2}, {o3}, {o4}, {o5}</p>

      <h2>Destructured Even Team Players</h2>
      <p>{e1}, {e2}, {e3}, {e4}, {e5}</p>

      <h2>Merged Array of T20 and Ranji Trophy Players</h2>
      <ul>
        {merged.map((p,i)=><li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
