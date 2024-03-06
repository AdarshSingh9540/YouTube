import React, { useEffect, useState } from 'react';
import { API_URL } from '../utilis/constant';
import VideosCards from './VideosCards';
import { Link } from 'react-router-dom';
import ShimmerVideoCardContainer from './ShimmerVideoCardContainer';
import Channel from './channel'; // Import the Channel component
import { useDispatch, useSelector } from 'react-redux';
import { addvideo } from '../utilis/videoSlice';
import { API_KEY } from '../utilis/constant';
const VideoCont = () => {
    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();
// const videos = useSelector((state)=>state?.video?.Video)
   
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
       try{
        const data = await fetch(API_URL);
        const json = await data.json();
        // console.log(json)
        setVideos(json.items);
        dispatch(addvideo(json.items))
       }catch(error){
        console.log(error)
       }
    }

 
if(videos===undefined) return   <div className="">error</div>


    return (
        videos.length === 0 ? <ShimmerVideoCardContainer /> : (
            <div className='p-0 md:p-2 flex flex-col  md:flex-row md:flex-wrap my-4 md:my-6 md:mx-6 overflow-x-hidden md:overflow-hidden'>
                {videos.map(video => (
                    <div key={video.id}>
                        <Link to={"/watch?v=" + video.id}><VideosCards info={video} channelId={video.snippet.channelId} /></Link>
                    </div>
                ))}
            </div>
        )
    );
}

export default VideoCont;
