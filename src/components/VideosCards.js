import React, { useEffect } from 'react';
import ShimmerVideoCardContainer from './ShimmerVideoCardContainer';
import { useSelector, useDispatch } from 'react-redux';
import { ViewConverter } from '../utilis/constant';
import moment from 'moment';
import { API_KEY } from '../utilis/constant';
import { addchannel } from '../utilis/videoSlice';

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
        <div className='m-1 mr-1 items-center md:m-9 md:ml-8 h-full p-1 md:p-2 w-[98%] md:w-[360px] inline-block shadow-lg shadow-slate-300 hover:scale-x-110 transition duration-500 overflow-hidden'>
            <img className='rounded-lg mt-3' src={info.snippet.thumbnails.high.url} alt="" />
            <div className='flex flex-row'>
                {channel && (
                    <img className='w-12 h-12 mt-12 rounded-[50%]' src={channel.snippet.thumbnails.high.url} alt="" />
                )}
                <div className='ml-2'>
                    <ul className='text-xl mt-2'>
                        <li className='font-bold text-xl mt-3'>{info.snippet.title}</li>
                        <li className='font-semibold mt-3'>{info.snippet.channelTitle}</li>
                        <li>{ViewConverter(info.statistics.viewCount)} views &bull; {moment(info.snippet.publishedAt).fromNow()}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default VideosCards;
