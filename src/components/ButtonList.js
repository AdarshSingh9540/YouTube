import React from 'react'
import Button from './Button'

const list = ["All","Cricket","Gaming","Songs","Movies","News","Cartoon","Cooking","Live ","Highlights","Special","Beats","Colleges","Trains","Watched"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  )
}

export default ButtonList