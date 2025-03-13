import React from 'react'
import { Resume } from '../../assets';
const Footer = () => {
  return (
    <div>
      <div className='w-full py-5 flex flex-col lgl:flex-row'>
        <div className='w-full lgl:w-full pl-2 flex gap-50'>
          <div className=' w-full lgl:w-[1000px]'>
            <h2 className='text-sm lgl:text-2xl text-left lgl:text-left font-bold text-designColor'>Harshal Chinchole</h2>
            <p className='mt-1 text-xs font-semibold lgl:text-base text-left lgl:text-left text-gray-400'>Fullstack Developer</p>
          </div>
          <div className='w-full lgl:w-full text-end pr-0 pt-1 lgl:pt-1 flex justify-end lgl:justify-end'>
            <button className='w-[150px] h-8 lgl:w-[200px] lgl:h-12 bg-[#141518] rounded-lg lgl:text-base text-xs text-gray-400 uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent shadow-shadowOne lgl:mr-5'>
              <a href={Resume} Download="Resume">Resume Download</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer