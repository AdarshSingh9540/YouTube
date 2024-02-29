import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utilis/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 flex w-full rounded-lg'>
        <div className=''>
          <iframe
            width="1400"
            height="700"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen

          ></iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default WatchPage;
