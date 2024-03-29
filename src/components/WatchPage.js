import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utilis/appSlice';
import { useSelector } from 'react-redux';
import { API_KEY, ViewConverter } from '../utilis/constant';
import { useLocation } from 'react-router-dom';
import Comments from './Comments';
import LiveChat from './LiveChat';
import RecomVideo from './RecomVideo';
const WatchPage = () => {
    const dispatch = useDispatch();
    const [videoInfo, setVideoInfo] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const videoId = searchParams.get('v');
    const channel = useSelector(state => state.video.channel.find(channel => channel.id === videoInfo?.snippet?.channelId));
// console.log(channel)
    useEffect(() => {
        dispatch(closeMenu());
        if (videoId) {
            fetchVideoInfo();
        }
    }, [dispatch, videoId]);

    const fetchVideoInfo = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`);
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                setVideoInfo(data.items[0]);
            }
        } catch (error) {
            console.error('Error fetching video information:', error);
        }
    };

 
    const separateDescription = (description) => {
      if (!description) {
          return [];
      }
  
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
    <div className='flex flex-col md:flex-row w-full md:overflow-hidden'>
      <div className='px-0 md:px-5 flex flex-row md:flex-col w-full rounded-lg'>
        <div className='w-full md:w-[1100px] md:h-auto '>
          <iframe
            className='w-full h-[240px] md:w-1050 md:h-[550px]'
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className='w-[1100px] h-auto'>
            {videoInfo && <h2 className='font-bold  text-2xl mt-2 md:mt-6 mb-2'>{videoInfo?.title}</h2>}
            
      </div>
      <div className='flex  m-2 md:m-5 ml-1 md:ml-6 mt-6 md:mt-4'>
  <img className="rounded-full w-12 h-12  md:w-14 border-2 border-white  mr-6 md:mr-4" src={channel?.snippet?.thumbnails?.high?.url} alt="Channel Thumbnail" />
  <div className=''>
    <div className='flex items-center '>
      <div className='flex-1'>
        <p className='text-md md:text-lg font-semibold'>{channel?.snippet?.title}</p>
        <span className='text-md md:text-lg'>{ViewConverter(channel?.statistics?.subscriberCount)}</span>
      </div>
     
      <button className='bg-black px-2 py-1 text-white rounded-md font-semibold ml-20 mdLml-20'>Subscribe</button>
    </div>
  </div>
</div>


      <div className='bg-stone-100 shadow-xl p-2 '>
      <div className='my-2 '>
              <button className='text-lg' onClick={() => setShowDescription(!showDescription)}>
                <div className='text-lg font-semibold'> {showDescription ? 'Description  ▲' : 'Description  ▼'}</div>
              </button>
            </div>
            {showDescription && (
              <div className='text-md'>
                {videoInfo && separateDescription(videoInfo.snippet?.description).map((section, index) => (
                  <p key={index}>{section}</p>
                ))}
              </div>
            )}
          </div> 
        </div>
        
      </div>
      <div className='m-0 w-24 md:w-0'> <Comments  /></div>
      <div className='mt-2'>
          {/* <LiveChat /> */}
          <RecomVideo  categoryId={videoId}/>
        </div>
    
      
    </div>
  );
};

export default WatchPage;
