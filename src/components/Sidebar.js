import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const isMenuOpen = useSelector((store) =>store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48 cursor-pointer'>
    <ul className=''>
        <li><Link to="/">Home</Link></li>
        <li>Sports</li>
        <li>Videos</li>
        <li>Live</li>
    </ul>


    <h1 className='font-bold pt-5'>Subscription</h1>
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