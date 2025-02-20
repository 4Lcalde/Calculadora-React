import { calculo } from '../utils/calculo/calculo'

export const INITIAL_STATE_CALCULATOR = {
  result: 0,
  number1: undefined,
  calc: '',
  historic: []
}

export const reducerCalculator = (state = INITIAL_STATE_CALCULATOR, action) => {
  if (action.type === 'CLEAR') {
    return INITIAL_STATE_CALCULATOR
  } else if (state.number1 === undefined) {
    return {
      ...state,
      number1: action.value,
      calc: action.type
    }
  } else if (state.number1 !== undefined && action.type !== 'EQUAL') {
    const resultado = calculo(state.number1, action.value, state.calc)

    return {
      ...state,
      number1: resultado,
      calc: action.type
    }
  } else if (state.number1 !== undefined && action.type === 'EQUAL') {
    const resultado = calculo(state.number1, action.value, state.calc)
    return {
      ...state,
      result: resultado,
      number1: undefined,
      calc: '',
      historic: [...state.historic, resultado]
    }
  }
}
