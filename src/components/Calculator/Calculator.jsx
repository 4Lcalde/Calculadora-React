import React, { useRef } from 'react'
import './Calculator.css'
import { INPUT_ACTIONS } from '../../Data/Data'
import OptionsCalculator from '../CalculatorElements/OptionsCalculator/OptionsCalculator'
import ButtonsContainer from '../CalculatorElements/ButtonsContainer/ButtonsContainer'
import HistoricContainer from '../CalculatorElements/HistoricContainer/HistoricContainer'
import ResultCalculator from '../CalculatorElements/ResultCalculator/ResultCalculator'

const Calculator = ({ dispatch, state }) => {
  const refInput = useRef(null)

  return (
    <section className='calculator'>
      <div id='calculator-container'>
        <input
          type='number'
          id='input-number'
          ref={refInput}
          placeholder={state.number1 ? state.number1 : '0'}
        />

        <ResultCalculator state={state} />

        <OptionsCalculator reference={refInput} dispatch={dispatch} />
        <ButtonsContainer reference={refInput} />
        <HistoricContainer state={state} />
      </div>
    </section>
  )
}

export default Calculator
