import React from 'react'
import Button from './Button'

const list = ["All","Cricket","Gaming","Songs","Movies","News","Cartoon","Cooking","Live ","Highlights","Special"];

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