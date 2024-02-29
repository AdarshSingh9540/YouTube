import React, { useEffect, useState } from 'react'
import ChatsMess from './ChatsMess'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utilis/chatSlice';
import store from '../utilis/store';
import { generateRandomName, makeRandomMess } from '../utilis/helper';

const LiveChat = () => {
  const [liveMess , setLiveMess] = useState("")

    const dispatch = useDispatch();

    const chatMessages = useSelector((store)=> store.chat.message);

    useEffect(()=>{
        const i =setInterval(()=>{
            console.log("Api cl")
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMess(30),
            }))
          
        },1000)

        return () => clearInterval(i);
    },[])
  return (
    <>
      <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse'>
      {
        chatMessages.map((c,i)=> (
            <ChatsMess key={i} name={c.name} message={c.message}/>
        ))
      }
      
    </div>
    <form className='w-full p-2 m-4 border border-black ' onSubmit={(e) =>{
      e.preventDefault();
      dispatch(addMessage({
        name:"Adarsh Singh",
        message:liveMess
      }));
      setLiveMess(" ")
    }}>
      <input type="text" className='w-96 p-3 border border-black rounded-md' value={liveMess} onChange={(e) =>{
        setLiveMess(e.target.value)
      }} />
      <button className='px-5 p-3 mx-2 bg-red-500 font-bold rounded-md'>Send</button>

    </form>
    </>
    
  )
}

export default LiveChat