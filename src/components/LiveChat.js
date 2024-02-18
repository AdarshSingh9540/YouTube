import React, { useEffect } from 'react'
import ChatsMess from './ChatsMess'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utilis/chatSlice';
import store from '../utilis/store';

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector((store)=> store.chat.message);

    useEffect(()=>{
        const i =setInterval(()=>{
            console.log("Api cl")
            dispatch(addMessage({
                name:"Adarsh",
                message:"hi i am adarsh singh"
            }))
        },2000)

        return () => clearInterval(i);
    },[])
  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll '>
      {
        chatMessages.map((c,i)=> (
            <ChatsMess key={i} name={c.name} message={c.message}/>
        ))
      }
    </div>
  )
}

export default LiveChat