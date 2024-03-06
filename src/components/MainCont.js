import React from 'react'
import ButtonList from './ButtonList'
import VideoCont from './VideoCont'

const MainCont = () => {
  return (
    <div className='col-span-1 overflow-x-hidden'>
         <div className='w-full md:overflow-x-auto'>
        <ButtonList />
      </div>
        <VideoCont/>
    </div>
  )
}

export default MainCont