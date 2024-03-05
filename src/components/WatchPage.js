import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utilis/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import LiveChat from './LiveChat';

import { API_KEY } from '../utilis/constant';

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoInfo, setVideoInfo] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoInfo();
  }, [dispatch]);

 

  const fetchVideoInfo = async () => {
    try {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${searchParams.get("v")}&key=${API_KEY}`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setVideoInfo(data.items[0].snippet);
      }
    } catch (error) {
      console.error('Error fetching video information:', error);
    }
  };

 
  const separateDescription = (description) => {
  
    const emailPattern = /([\w.-]+@[^\s]+)/g;
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const socialMediaPattern = /(https?:\/\/(?:www\.)?(?:instagram|facebook|youtube)\.[^\s]+)/g;

  
    const emailSections = description.split(emailPattern).map((section, index) => {
      if (index % 2 === 0) return section;
      return <a href={`mailto:${section}`} key={section + index}>{section}</a>;
    });
    const urlSections = emailSections.map(section => {
      if (typeof section === 'string') {
        return section.split(urlPattern).map((part, index) => {
          if (index % 2 === 0) return part;
          return <a className='text-blue-900' href={part} key={part + index} target="_blank" rel="noopener noreferrer">{part}</a>;
        });
      }
      return section;
    });
    const socialMediaSections = urlSections.map(section => {
      if (typeof section === 'string') {
        return section.split(socialMediaPattern).map((part, index) => {
          if (index % 2 === 0) return part;
          return <a href={part} key={part + index} target="_blank" rel="noopener noreferrer">{part}</a>;
        });
      }
      return section;
    });

  
    const sections = socialMediaSections.flat().filter(section => section !== '');

    return sections;
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 flex w-full rounded-lg'>
        <div className='w-[1400px] h-auto'>
          <iframe
            width="1400"
            height="700"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className='w-[1200px] h-auto'>
            {videoInfo && <h2 className='font-bold text-2xl mt-6 mb-2'>{videoInfo.title}</h2>}
            
      </div>
      <div className="flex items-center mt-4 ">
      <img  className="rounded-[50%] w-24 border-radius-[50%] mr-4" src="adarsh_profile.jpeg" alt="image" />
      <div className='flex-1 line-height-[18px]'>
        <p className=''>adarsh singh</p>
        <span>1 M</span>
      </div>
      <div></div>
      <button className='bg-red-600 '>Subscriber</button>
      </div>
      <div className='bg-stone-100 shadow-xl p-4'>
      <div className='my-4 '>
              <button className='text-lg' onClick={() => setShowDescription(!showDescription)}>
                <div className='text-xl font-semibold'> {showDescription ? 'Description  ▲' : 'Description  ▼'}</div>
              </button>
            </div>
            {showDescription && (
              <div className='text-lg'>
                {videoInfo && separateDescription(videoInfo.description).map((section, index) => (
                  <p key={index}>{section}</p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <Comments  />
    </div>
  );
};

export default WatchPage;
