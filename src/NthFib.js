import React from 'react'
import { calculateFib, suffixOf } from './math'

export default function NthFib({ count, increment }) {
  const fib = calculateFib(count)

  return (
    <div className='container'>
      <h2>Nth Fib</h2>
      <p>
        The <b>{suffixOf(count)}</b> number in the fibonacci sequence is <b>{fib}</b>.
      </p>
      <button onClick={increment}>Next number</button>
    </div>
  )
}