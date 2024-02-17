import React from 'react'

const Button = ({name}) => {
  return (
    <div>

        <button className='py-2 m-3 px-5 bg-gray-300 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button