import React from "react";
import { calculatePrime, suffixOf } from "./math";

export default function NthPrime({ count, increment }) {
  const prime = calculatePrime(count);

  return (
    <div className="container">
      <h2>Nth Prime</h2>
      <p>
        The <b>{suffixOf(count)}</b> prime is <b>{prime}</b>.
      </p>
      <button onClick={increment}>Next number</button>
    </div>
  );
}
