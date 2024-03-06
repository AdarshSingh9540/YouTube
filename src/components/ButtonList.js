import React from 'react'
import Button from './Button'

const list = ["All","Cricket","Gaming","Songs","Movies","News","Cartoon","Cooking","Live ","Highlights","Special","Beats","Colleges","Trains"];

const ButtonList = () => {
  return (
    <div className='w-full flex overflow-x-auto whitespace-nowrap' >
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  )
}

export default ButtonList