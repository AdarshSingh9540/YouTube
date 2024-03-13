import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { json, useLocation } from 'react-router-dom';
import { useState } from 'react'
import { API_KEY } from '../utilis/constant';
const RecomVideo = ({categoryId}) => {
    const channel = useSelector(state => state.video.Video);
    // console.log(channel)
   const [categoryIds, setCategoryIds] = useState([]);
   const [videoInfo, setVideoInfo] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    const channelDet = useSelector(state => state.video.channel[0].snippet.thumbnails.high.url);
console.log(channelDet)
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
                    <div key={index} className='w-full md:w-96  mt-6'>
                    <div  className='md:ml-1'>
                    <img src={snippet?.thumbnails?.high?.url} alt="" />
                        </div>
                       <div className='flex flex-row'>
                        <img className='rounded-full w-12 h-8 md:w-10 md:h-10 mt-4 ' src={channelDet} alt="" />
                        <div className=' mt-2 md:ml-2'>
                            <p className=''>{snippet && snippet.title}</p>
                            <p className='font-semibold'>{snippet && snippet.channelTitle}</p> 
                        </div>
                       </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RecomVideo;