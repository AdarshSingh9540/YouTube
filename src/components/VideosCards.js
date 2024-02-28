import React from 'react'
import Shimmer from './Shimmer';

const VideosCards = ({info}) => {
    const {snippet ,statistics}= info;
    const {channelTitle , title , thumbnails} = snippet;
  
  return !info? <Shimmer/> :(
    <div className='m-2 ml-5 p-2 w-[350px]'  >
    <img className='rounded-lg' src={thumbnails.high.url} alt="" />
    <ul className='text-xl'>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
    </ul>
    </div>
  )
}

export default VideosCards