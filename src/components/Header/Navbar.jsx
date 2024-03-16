import React from 'react';
import branding from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='fixed top-0 w-full z-10 text-white bg-[#D3BFFC]'>
            <div className='flex justify-between items-center mx-6 py-2 text-xl'>
                <div className='flex justify-center items-center gap-2'>
                    <img src={branding} className='w-32' alt="" />
                    <Link className='font-xl'>mail@coderkaisar.com</Link>
                </div>
                <div className='pr-2 flex flex-col justify-start items-end md:flex-row lg:flex-row md:justify-center lg:justify-center md:items-center lg:items-center gap-4'>
                    <nav className='flex flex-col justify-start items-end md:flex-row lg:flex-row md:justify-center lg:justify-center md:items-center lg:items-center gap-4 font-sans'>
                        <Link className=' hover:border-b-2 hover:border-[#A886ED] hover: rounded-lg hover:px-2 hover:translate-x-4 hover:transition-all hover:ease-linear hover:mr-4'>Services</Link>
                        <Link className=' hover:border-b-2 hover:border-[#A886ED] hover: rounded-lg hover:px-2 hover:translate-x-4 hover:transition-all hover:ease-linear hover:mr-4'>Works</Link>
                        <Link className=' hover:border-b-2 hover:border-[#A886ED] hover: rounded-lg hover:px-2 hover:translate-x-4 hover:transition-all hover:ease-linear hover:mr-4'>Resume</Link>
                        <Link className=' hover:border-b-2 hover:border-[#A886ED] hover: rounded-lg hover:px-2 hover:translate-x-4 hover:transition-all hover:ease-linear hover:mr-4'>Skills</Link>
                        <Link className=' hover:border-b-2 hover:border-[#A886ED] hover: rounded-lg hover:px-2 hover:translate-x-4 hover:transition-all hover:ease-linear hover:mr-4'>Testimonials</Link>
                        <Link className=' hover:border-b-2 hover:border-[#A886ED] hover: rounded-lg hover:px-2 hover:translate-x-4 hover:transition-all hover:ease-linear hover:mr-4'>Contact</Link>
                    </nav>
                    <Link className='bg-gradient-to-l hover:bg-gradient-to-r from-[#7D49E5] to-[#F0E9FC] px-6 py-2 rounded-full'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;