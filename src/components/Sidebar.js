import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector((store) =>store.isMenuOpen);
  return (
    <div className='p-5 shadow-lg w-48'>
    <ul className=''>
        <li>Home</li>
        <li>Sports</li>
        <li>Videos</li>
        <li>Live</li>
    </ul>


    <h1 className='font-bold'>Subscription</h1>
    <ul className=''>
        <li>Music</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
    </ul>

    <h1 className='font-bold pt-5'>Watch Later</h1>
    <ul className=''>
        <li>Music</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
    </ul>
    </div>
  )
}

export default Sidebar