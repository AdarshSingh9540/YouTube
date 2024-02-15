import React from 'react'
import Sidebar from './Sidebar'
import MainCont from './MainCont'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainCont/>
    </div>
  )
}

export default Body