import React, { useEffect } from 'react';
import ShimmerVideoCardContainer from './ShimmerVideoCardContainer';
import { useSelector, useDispatch } from 'react-redux';
import { ViewConverter } from '../utilis/constant';
import moment from 'moment';
import { API_KEY } from '../utilis/constant';
import { addchannel } from '../utilis/videoSlice';
import { Link } from 'react-router-dom';

const VideosCards = ({ info, channelId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchChannelDetails = async () => {
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`)
            const json = await data.json();
            dispatch(addchannel(json.items));
        };

        fetchChannelDetails();
    }, [dispatch, channelId]);

    const channel = useSelector(state => state.video.channel.find(channel => channel.id === channelId));

    return !info ? (
        <ShimmerVideoCardContainer />
    ) : (
        <Link to={`/watch?v=${info.id}`} className='video-card-link  overflow-hidden md:overflow-hidden'>
            <div className=' my-2 md:items-center md:m-2 md:ml-6 h-full  md:p-2 w-[390px] md:w-[400px] inline-block overflow-hidden md:overflow-hidden hover:scale-105 md:hover:scale-110 transition-delay-175 '>
            <img className='rounded-lg mt-1' src={info.snippet.thumbnails.high.url} alt="" />
            <div className='flex flex-row'>
                {channel && (
                    <img className='w-12 h-10 md:w-12 md:h-12 mt-12 mr-1 rounded-[50%]' src={channel.snippet.thumbnails.high.url} alt="" />
                )}
                <div className=''>
                    <ul className='text-md mt-2 p-4 m-2'>
                        <li className='font-bold text-md mt-2 mr-1 pr-1'>{info.snippet.title}</li>
                        <li className='font-semibold mt-2'>{info.snippet.channelTitle}</li>
                        <li>{ViewConverter(info.statistics.viewCount)} views &bull; {moment(info.snippet.publishedAt).fromNow()}</li>
                    </ul>
                </div>
            </div>
        </div>
        </Link>
    );
}

export default VideosCards;
