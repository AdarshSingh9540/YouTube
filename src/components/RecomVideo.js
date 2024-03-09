import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { json, useLocation } from 'react-router-dom';
import { useState } from 'react'
import { API_KEY } from '../utilis/constant';
const RecomVideo = ({categoryId}) => {
    const channel = useSelector(state => state.video.Video);
   console.log(channel)
   const [categoryIds, setCategoryIds] = useState([]);
   const [videoInfo, setVideoInfo] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId="+categoryId+"&key=" + API_KEY);
                const json = await data.json();
                const ids = json.items.map(item => item.snippet.categoryId);
                setCategoryIds(ids);
                console.log(ids)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            {channel.map((channelObject, index) => {
                const snippet = channelObject.snippet;

                return (
                    <div key={index} className='w-full md:w-80  md:ml-6 md:m-8'>
                    <div  className='md:ml-8'>
                    <img src={snippet?.thumbnails?.high?.url} alt="" />
                        </div>
                        <div className='ml-8'>
                            <h4 className=''>Best channel for learning services</h4>
                            <p className=''>{snippet && snippet.title}</p>
                            <p></p>
                            {/* Add other snippet properties as needed */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RecomVideo;