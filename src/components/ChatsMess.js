import React from 'react'

const ChatsMess = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className='h-5' src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg " alt="" />
        <span className='font-bold px-3'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatsMess