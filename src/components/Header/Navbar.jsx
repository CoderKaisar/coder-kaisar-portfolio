import React, { useEffect } from 'react';
import branding from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

    const transparentNav = () => {
        window.addEventListener('scroll', function () {
            // console.log("its working")
            var menuBar = document.getElementById('menuBar');
            var scrollHeight = document.documentElement.scrollHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var clientHeight = document.documentElement.clientHeight;

            // Check if the user has scrolled to the bottom of the page
            if (scrollTop) {
                // Add the 'transparent' class to make the menu bar transparent
                menuBar.classList.add('bgPink');
            } else {
                // Remove the 'transparent' class if the user is not at the bottom
                menuBar.classList.remove('bgPink');
            }
        });


    }

    transparentNav()

    // useEffect(() => {
    //     transparentNav()
    // }, [transparentNav])

    return (
        <div className='fixed top-0 w-full z-10 text-white bg-transparent ' id="menuBar">
            <div className='flex justify-between items-center mx-6 py-2 text-xl'>
                <div className='flex justify-center items-center gap-2'>
                    <img src={branding} className='w-32' alt="" />
                    <Link className='font-xl'>mail@coderkaisar.com</Link>
                </div>
                <div className='pr-2 flex flex-col justify-start items-end md:flex-row lg:flex-row md:justify-center lg:justify-center md:items-center lg:items-center gap-4'>
                    <nav className='flex flex-col justify-start items-end md:flex-row lg:flex-row md:justify-center lg:justify-center md:items-center lg:items-center gap-4 font-sans'>
                        <Link className=' hover:border-b-2  hover:border-[#A886ED]   hover:transition-all  rotate-0 hover:rotate-6 hover:text-orange-400 hover:ease-linear hover:mr-4'>Services</Link>
                        <Link className=' hover:border-b-2  hover:border-[#A886ED]   hover:transition-all  rotate-0 hover:rotate-6 hover:text-orange-400 hover:ease-linear hover:mr-4'>Works</Link>
                        <Link className=' hover:border-b-2  hover:border-[#A886ED]   hover:transition-all  rotate-0 hover:rotate-6 hover:text-orange-400 hover:ease-linear hover:mr-4'>Resume</Link>
                        <Link className=' hover:border-b-2  hover:border-[#A886ED]   hover:transition-all  rotate-0 hover:rotate-6 hover:text-orange-400 hover:ease-linear hover:mr-4'>Skills</Link>
                        <Link className=' hover:border-b-2  hover:border-[#A886ED]   hover:transition-all  rotate-0 hover:rotate-6 hover:text-orange-400 hover:ease-linear hover:mr-4'>Testimonials</Link>
                        <Link className=' hover:border-b-2  hover:border-[#A886ED]   hover:transition-all  rotate-0 hover:rotate-6 hover:text-orange-400 hover:ease-linear hover:mr-4'>Contact</Link>
                    </nav>
                    <Link className='bg-gradient-to-l hover:bg-gradient-to-r from-[#7D49E5] to-[#F0E9FC] px-6 py-2 rounded-full'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;