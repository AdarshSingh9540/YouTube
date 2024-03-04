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

  // Function to separate the description into different sections
  const separateDescription = (description) => {
    // Regex patterns to match email and URL links
    const emailPattern = /([\w.-]+@[^\s]+)/g;
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const socialMediaPattern = /(https?:\/\/(?:www\.)?(?:instagram|facebook|youtube)\.[^\s]+)/g;

    // Split the description based on email, URL, and social media patterns
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

    // Flatten the array and filter out empty strings
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
      <div className='bg-stone-100 shadow-xl p-4'>
      <div className='my-4 '>
              <button className='text-lg' onClick={() => setShowDescription(!showDescription)}>
                <div className='text-xl font-semibold'> {showDescription ? 'Show Less ▲' : 'Show More ▼'}</div>
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
