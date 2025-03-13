import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaLinkedinIn, FaReact, FaInstagram, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiDotnet } from 'react-icons/si';


const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer.', 'Frontend Developer.', 'Backend Developer','Java Developer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 20,
        delaySpeed: 2000,
    });
    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY PROFILE</h4>
                <h1 className='text-4xl md:text-5xl font-bold text-white'> Hi, I'm {" "}
                    <span className='text-designColor capitalize'>Harshal Chinchole</span>
                </h1>
                <h2 className='text-2xl md:text-3xl font-bold text-white'>a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#d0a507"
                    />
                </h2>
                <p>
                    “Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. Well-versed in design standards and user preferences.Resourceful professional with successful track record in developing innovative web designs and features.”
                </p>
            </div>
            <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titlebold mb-4'>Find me in</h2>
                    <div className='flex gap-4'>
                        <a href='https://www.facebook.com/share/1KpS6vcy4M/' target='_blank'>
                        <span className='BannerIcon'>
                            <FaFacebookF />
                        </span>
                        </a>
                        <a href='https://www.linkedin.com/in/hvchinchole/' target='_blank'>
                        <span className='BannerIcon'>
                            <FaLinkedinIn />
                        </span>
                        </a>
                        <a href='https://www.instagram.com/harsh_artist_08/' target='_blank'>
                        <span className='BannerIcon'>
                            <FaInstagram />
                        </span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titlebold mb-4'>Best skill on</h2>
                    <div className='flex gap-4'>
                        <span className='BannerIcon'>
                            < FaReact />
                        </span>
                        <span className='BannerIcon'>
                            < FaJava />
                        </span>
                        <span className='BannerIcon'>
                            <SiDotnet />
                        </span>
                        <span className='BannerIcon'>
                            <SiSpringboot />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner