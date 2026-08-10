import { useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  const convert = () => {
    setResult(amount * 280); // USD → PKR
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={convert}>Convert</button>

      <h2>PKR: {result}</h2>
    </div>
  );
}

export default CurrencyConverter;