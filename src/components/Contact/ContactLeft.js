import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, } from 'react-icons/fa';
import { contactImg } from '../../assets';
const ContactLeft = () => {
    return (
        <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
            <img className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg} alt='contactImg'
            />
            <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-bold text-white'>Harshal Chinchole</h3>
                <p className='text-lg font-normal text-gray-400'>Fullstack Developer</p>
                <p className='text-base text-gray-400 tracking-wide'>Get in touch! feel free to connect for job opportunities, collaborations, or discussions. I'm eager to explore new career prospects and contribute my skills effectively.</p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Phone: <span className='text-lightText'>+91 8459834919</span>
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Email:{" "}<span className='text-lightText'>harshalchinchole28@gmail.com</span>
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
            </div>
            <div className='flex gap-4'>
                <a href='https://www.facebook.com/share/1KpS6vcy4M/' target='_blank' rel="noreferrer">
                    <span className='BannerIcon'>
                        <FaFacebookF />
                    </span>
                </a>
                <a href='https://www.linkedin.com/in/hvchinchole/' target='_blank' rel="noreferrer">
                    <span className='BannerIcon'>
                        <FaLinkedinIn />
                    </span>
                </a>
                <a href='https://www.instagram.com/harsh_artist_08/' target='_blank' rel="noreferrer">
                    <span className='BannerIcon'>
                        <FaInstagram />
                    </span>
                </a>
            </div>
        </div>
    );
}

export default ContactLeft
