import React from 'react'
import ShimmerVideoCardContainer from './ShimmerVideoCardContainer';

const VideosCards = ({info}) => {
    const {snippet ,statistics}= info;
    const {channelTitle , title , thumbnails} = snippet;
  
    return !info ? <ShimmerVideoCardContainer/> : 
      (
    <div className='m-9 h-full ml-6 p-2 w-[300px] inline-block shadow-lg shadow-slate-300 '  >
    <img className='rounded-lg mt-3' src={thumbnails.high.url} alt="" />
    <ul className='text-xl mt-2 '>
        <li className='font-bold text-xl mt-3'>{title}</li>
        <li className='font-bold mt-3'>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
    </ul>
    </div>
  )
}

export default VideosCards