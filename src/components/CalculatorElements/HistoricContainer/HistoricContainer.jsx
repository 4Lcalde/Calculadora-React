import React, { useMemo } from 'react'

const HistoricContainer = ({ state }) => {
  const results = useMemo(
    () => state.historic.toSorted((a, b) => a - b),
    [state.historic]
  )

  return (
    <div className='historic-result-calculator'>
      <h2>Histórico de resultados: </h2>
      <ul id='ul-results'>
        {results.map((result, index) => (
          <li className='li-results' key={index}>
            {result}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HistoricContainer
