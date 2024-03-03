import React from 'react'
import ShimmerVideoCardContainer from './ShimmerVideoCardContainer';

const VideosCards = ({info}) => {
    const {snippet ,statistics}= info;
    const {channelTitle , title , thumbnails} = snippet;
  
    return !info ? <ShimmerVideoCardContainer/> : 
      ( 
    <div className=' m-1 mr-1  items-center md:m-9 md:ml-8 h-full p-1 md:p-2 w-[98%]  md:w-[350px] inline-block shadow-lg shadow-slate-300 hover:scale-x-110 transition duration-500 '  >
    <img className='rounded-lg mt-3 ' src={thumbnails.high.url} alt="" />
    <ul className='text-xl mt-2 '>
        <li className='font-bold text-xl mt-3'>{title}</li>
        <li className='font-bold mt-3'>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
    </ul>
    </div>
  )
}

export default VideosCards