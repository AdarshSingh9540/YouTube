import React, { useEffect, useState } from 'react'
import { API_URL } from '../utilis/constant';
import VideosCards from './VideosCards';
import { Link } from 'react-router-dom';
import ShimmerVideoCardContainer from './ShimmerVideoCardContainer';
const VideoCont = () => {

  const [videos ,setVideos] = useState([]);

  useEffect(()=>{

    getVideos();
  },[])

  const getVideos = async () =>{
    const data = await fetch(API_URL);
    const json =await data.json();
    setVideos(json.items);
  }
  return (videos.length === 0) ? <ShimmerVideoCardContainer/> : (
    <div className='flex flex-wrap'>
    {
      videos.map(video =>  (
        <Link key={video.id} to={"/watch?v="+video.id}><VideosCards  info={video}/></Link>
      ))
    }
   
    </div>
  )
}

export default VideoCont