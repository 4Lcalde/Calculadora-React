import React, { useReducer } from 'react'
import {
  INITIAL_STATE_CALCULATOR,
  reducerCalculator
} from '../../Data/DataUseReducer'
import Calculator from '../../components/Calculator/Calculator'

const UseReducerCalculator = () => {
  const [state, dispatch] = useReducer(
    reducerCalculator,
    INITIAL_STATE_CALCULATOR
  )

  const { result, number1, number2, historic } = state
  return <Calculator dispatch={dispatch} state={state} />
}

export default UseReducerCalculator
