import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1 Euro = 90 Rupees (Example value)
    const eurosConverted = rupees / 90;
    setEuro(eurosConverted.toFixed(2));
  };

  return (
    <div>
      <h1>Currency Convertor</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Rupees: </label>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      <h2>Euro: {euro}</h2>
    </div>
  );
};

export default CurrencyConvertor;
