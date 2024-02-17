import React, { useEffect, useState } from 'react'
import { API_URL } from '../utilis/constant';
import VideosCards from './VideosCards';
import { Link } from 'react-router-dom';
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
  if(!videos) return null;
  return (
    <div className='flex flex-wrap'>
    {
      videos.map(video =>  (
        <Link to={"/watch?v="+video.id}><VideosCards key={video.id} info={video}/></Link>
      ))
    }
   
    </div>
  )
}

export default VideoCont