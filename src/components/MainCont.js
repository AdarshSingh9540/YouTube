import React from 'react'
import ButtonList from './ButtonList'
import VideoCont from './VideoCont'

const MainCont = () => {
  return (
    <div className='col-span-1'>
         <div className='w-full overflow-x-auto'>
        <ButtonList />
      </div>
        <VideoCont/>
    </div>
  )
}

export default MainCont