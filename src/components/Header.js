import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utilis/appSlice';
import { Search_API } from '../utilis/constant';
import { cacheResult } from '../utilis/searchSlice';

const Header = () => {

  const [searchQuery ,setSearchQuery] = useState("");
  const [sugg, setSugg] = useState([]);
  const [showSugg , setShowSugg] = useState(false);

  const searchCache = useSelector((store)=> store.search);

   useEffect(()=>{
    const timer =setTimeout(()=>
    {
      if(searchCache[searchQuery]){
        setSugg(searchCache[searchQuery]);
      }else{
        getSearchSugg();
      }
    },200);
    return () =>{
      clearTimeout(timer);
    }
   },[searchQuery])

   const getSearchSugg = async ()=>{
    const data = await fetch(Search_API+searchQuery);
    const json = await data.json();
    // console.log(json)

    setSugg(json[1]);
    dispatch(cacheResult({
      [searchQuery] : json[1]
    }));
    
   }

    const dispatch = useDispatch();


    const toggleMenuhandler = () =>{
        dispatch(toggleMenu());
    };
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg' >
   <div className='flex col-span-1'>
   <img 
   onClick={()=>toggleMenuhandler()}
   className='h-8 cursor-pointer'
    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"  
    alt="hamburger"
    />
<img 
className='h-12 mx-2' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt=""
 />
   </div>
      <div className='col-span-10 px-10'>
       <div>
        <input 
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={()=> setShowSugg(true)}
        onBlur={()=> setShowSugg(false)}
        type="text"
         className='w-1/2 border border-gray-400 rounded-l-lg px-5 py-2'  placeholder='Search...'/>
        <button className='border border-gray-400 rounded-r-lg px-5 py-2'>Search</button>
        </div>
        <div className='fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg'>
          <ul className=''>
          {
            showSugg &&
            sugg.map((s)=>(
              <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>
            ))
          }
            
          </ul>
        </div>
      </div>
      <div className='col-span-1'>
        <img className='h-8' src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="" />
      </div>
    </div>
  )
}

export default Header