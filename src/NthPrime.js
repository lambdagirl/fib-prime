import React from "react";
import { calculatePrime, suffixOf } from "./math";

function NthPrime({ count, increment }) {
  const prime = React.useMemo(() => calculatePrime(count), [count]);

  return (
    <div className="container">
      <h2>Nth Prime</h2>
      <p>
        The <b>{suffixOf(count)}</b> prime number is <b>{prime}</b>.
      </p>
      <button onClick={increment}>Next prime</button>
    </div>
  );
}

export default NthPrime;
