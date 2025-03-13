import React from 'react'
import { ProfileImg_2 } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
        <img
        className='w-[300px] h-[450px] lgl:w-[400px] lgl:h-[590px] z-10' 
        src={ProfileImg_2} alt="ProfileImg" />
        <div className='absolute bottom-0 w-[280px] h-[340px] lgl:w-[370px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div>
    </div>
  )
}

export default RightBanner