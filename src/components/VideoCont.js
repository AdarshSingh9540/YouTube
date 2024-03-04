import React, { useEffect, useState } from 'react';
import { API_URL } from '../utilis/constant';
import VideosCards from './VideosCards';
import { Link } from 'react-router-dom';
import ShimmerVideoCardContainer from './ShimmerVideoCardContainer';
import Channel from './channel'; // Import the Channel component

const VideoCont = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json)
        setVideos(json.items);
    }

    return (
        videos.length === 0 ? <ShimmerVideoCardContainer /> : (
            <div className='p-1 flex flex-wrap my-6 md:ml-8'>
                {videos.map(video => (
                    <div key={video.id}>
                        <Link to={"/watch?v=" + video.id}><VideosCards info={video} /></Link>
                        <Channel videoId={video.id} /> {/* Pass the video ID to the Channel component */}
                    </div>
                ))}
            </div>
        )
    );
}

export default VideoCont;
