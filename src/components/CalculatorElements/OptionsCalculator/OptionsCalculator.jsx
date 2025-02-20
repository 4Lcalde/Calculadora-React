import React from 'react'
import { INPUT_ACTIONS } from '../../../Data/Data'

const OptionsCalculator = React.memo(({ reference, dispatch }) => {
  return (
    <div className='options-calculator'>
      {INPUT_ACTIONS.map((element) => (
        <button
          className={`button button-action`}
          key={element.type}
          onClick={() => {
            dispatch({
              type: element.type,
              value: Number(reference.current.value)
            })
            reference.current.value = ''
          }}
        >
          {element.sign}
        </button>
      ))}
    </div>
  )
})

export default OptionsCalculator
