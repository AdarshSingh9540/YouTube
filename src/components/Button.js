import React from 'react'

const Button = ({name}) => {
  return (
    <div>

        <button className='py-3 m-3 px-6 bg-gray-300 rounded-lg font-semibold'>{name}</button>
    </div>
  )
}

export default Button