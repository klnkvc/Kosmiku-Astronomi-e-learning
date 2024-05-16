import React from 'react'
import Avatar from '../assets/chatbot/chatbotAvatar.png'
const Chatbot = () => {
  return <div className="w-[120px] h-[120px] items-center flex flex-col border-solid border-based-1 p-4 bg-landing border-4 rounded-3xl cursor-pointer hover:scale-105">
    <img src={Avatar} alt="" className='max-w-16' />
    <p className='font-bold text-white'>Kosmibot</p>
  </div>;
}

export default Chatbot
