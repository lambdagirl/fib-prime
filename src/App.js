import React from 'react';
import './App.css';
import NthFib from "./NthFib";
import NthPrime from "./NthPrime";

function App() {
  const [fibCount,setFibCount] = React.useState(1)
  const [primeCount,setPrimeCount] = React.useState(1)

  function handleReset(){
    setFibCount(1)
    setPrimeCount(1)
  }

  function add10(){
    setPrimeCount((c)=>c+10)
    setFibCount((c)=> c+10)
  }
  return (
    <>
      <button onClick={add10}>Add 10 </button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <NthFib count={fibCount} increment={() => setFibCount((c) => c + 1)} />
      <NthPrime count={primeCount} increment={()=>setPrimeCount((c)=>c+1)} />
    </>
  );
}

export default App;
