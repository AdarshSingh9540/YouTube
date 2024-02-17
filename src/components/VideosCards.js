import React from 'react'

const VideosCards = ({info}) => {
    const {snippet ,statistics}= info;
    const {channelTitle , title , thumbnails} = snippet;
   
  return (
    <div className='m-2 p-2 w-72' >
    <img className='rounded-lg' src={thumbnails.high.url} alt="" />
    <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
    </ul>
    </div>
  )
}

export default VideosCards