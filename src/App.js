import React from 'react';
import './App.css';
import NthFib from "./NthFib";
import NthPrime from "./NthPrime";


function App() {
  const [fibCount, setFibCount] = React.useState(1);
  const [primeCount, setPrimeCount] = React.useState(1);

  const handleReset = () => {
    setFibCount(1);
    setPrimeCount(1);
  };

  const add10 = () => {
    setFibCount((c) => c + 10);
    setPrimeCount((c) => c + 10);
  };

  const incrementFib = React.useCallback(() => setFibCount((c) => c + 1), []);
  const incrementPrime = React.useCallback(
    () => setPrimeCount((c) => c + 1),
    []
  );

  return (
    <React.Fragment>
      <button onClick={add10}>Add 10</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <NthFib count={fibCount} increment={incrementFib} />
      <hr />
      <NthPrime count={primeCount} increment={incrementPrime} />
    </React.Fragment>
  );
}


export default App;
