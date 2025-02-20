import React from 'react'

const ResultCalculator = ({ state }) => {
  return (
    <div className='result-calculator'>
      <h2>Último resultado: {state.result} </h2>
    </div>
  )
}

export default ResultCalculator
