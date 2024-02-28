import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const isMenuOpen = useSelector((store) =>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48 cursor-pointer'>
    <ul className=' font-semibold'>
        <li><Link to="/">Home</Link></li>
        <li>Sports</li>
        <li>Videos</li>
        <li>Live</li>
    </ul>


    <h1 className='font-bold pt-5 text-l'>Subscription</h1>
    <ul className='my-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
    </ul>

    <h1 className='font-bold pt-5 text-l'>Watch Later</h1>
    <ul className='my-2 text-l'>
        <li>Music</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
    </ul>
    </div>
  )
}

export default Sidebar