import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Circular_1 } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className='w-full h-20 lgl:h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
            <div style={{ width: 210 }}>
                <img className='w-[150px] lgl:w-[210px]' src={Circular_1} alt='Circular_1' />
            </div>
            <div>
                <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-10'>
                    {navLinksdata.map(({ _id, title, link }) => (
                        <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >{title}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
                <span onClick={() => setShowMenu(!showMenu)} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer">
                    <FiMenu />
                </span>
                {showMenu && (
                    <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                        <div className="flex flex-col gap-8 py-2 relative">
                            <div>
                                <img className="w-32" src={Circular_1} alt="logo" />
                            </div>
                            <ul className="flex flex-col gap-4">
                                {navLinksdata.map((item) => (
                                    <li
                                        key={item._id}
                                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                                    >
                                        <Link
                                            onClick={() => setShowMenu(false)}
                                            activeClass="active"
                                            to={item.link}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                    Find me in
                                </h2>
                                <div className="flex gap-4">
<<<<<<< HEAD
                                    <a href='https://www.facebook.com/share/1KpS6vcy4M/' target='_blank' rel="noreferrer">
=======
                                    <a href='https://www.facebook.com/share/1KpS6vcy4M/' target="_blank" rel="noreferrer">
>>>>>>> f9f8c9c (second commit)
                                        <span className="w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                                            <FaFacebookF />
                                        </span>
                                    </a>
<<<<<<< HEAD
                                    <a href='https://www.linkedin.com/in/hvchinchole/' target='_blank' rel="noreferrer">
=======
                                    <a href='https://www.linkedin.com/in/hvchinchole/' target="_blank" rel="noreferrer">
>>>>>>> f9f8c9c (second commit)
                                        <span className="w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                                            <FaLinkedinIn />
                                        </span>
                                    </a>
<<<<<<< HEAD
                                    <a href='https://www.instagram.com/harsh_artist_08/' target='_blank' rel="noreferrer">
=======
                                    <a href='https://www.instagram.com/harsh_artist_08/' target="_blank" rel="noreferrer">
>>>>>>> f9f8c9c (second commit)
                                    <span className="w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                                        <FaInstagram />
                                    </span>
                                    </a>
                                </div>
                            </div>
                            <span
                                onClick={() => setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                            >
                                <MdClose />
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar
