import React from 'react'

const ButtonsContainer = React.memo(({ reference }) => {
  return (
    <div className='button-container'>
      {[...Array(10).keys()].reverse().map((num) => (
        <button
          className='button button-number'
          key={num}
          onClick={() => {
            reference.current.value = reference.current.value + num
          }}
        >
          {num}
        </button>
      ))}
    </div>
  )
})

export default ButtonsContainer
