import React from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='m-2 p-2 flex w-full'>
        <Sidebar/>
       <Outlet />
    </div>
  )
}

export default Body