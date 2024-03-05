import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_KEY } from '../utilis/constant';

const Channel = ({ videoId }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getDetail();
    }, []);

    const getDetail = async () => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+videoId+"&key="+API_KEY)
        const json = await data.json();
        // console.log(json);
    }

    return (
        <div>channel</div>
    );
}

export default Channel;
