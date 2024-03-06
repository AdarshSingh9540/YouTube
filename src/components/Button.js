import React from 'react'

const Button = ({name}) => {
  return (
    <div>

        <button className='py-2 m-2 px-4 bg-gray-300 rounded-lg font-semibold '>{name}</button>
    </div>
  )
}

export default Button