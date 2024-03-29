import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaFirefoxBrowser, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import heroImg from "../../assets/images/hero-img.png"
const Hero = () => {
    return (
        <section className='flex  md:flex-row flex-col-reverse lg:flex-row justify-around items-center gap-10'>
            <div className=' w-full md:w-[50%] lg:w-[50%] pl-20 py-10 mt-32'>
                <div className='flex flex-col justify-center items-start gap-4 py-10'>
                    <h4 className='text-xl md:text-3xl lg:text-5xl font-bold text-white'>I am Coder Kaisar</h4>
                    <div className='flex flex-col gap-2 py-4'>
                        <p className='text-2xl md:text-4xl lg:text-7xl font-bold bg-gradient-to-r from-[#8E5AF8] to-[#D6C3FC] inline-block text-transparent bg-clip-text'>Web Developer +</p>
                        <p className='text-3xl md:text-4xl lg:text-7xl font-bold bg-gradient-to-r from-[#8E5AF8] to-[#D6C3FC] inline-block text-transparent bg-clip-text py-2'>Web Designer</p>
                    </div>
                    <p className='text-center w-full md:w-[60%] lg:w-[60%] md:text-justify text-xs md:text-2xl lg:text-2xl text-white'>
                        I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                    </p>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row justify-start py-6 items-center gap-6'>
                    <Link className='border-2 px-2 md:px-4 lg:px-6 py-2 rounded-full border-[#9E72F8] text-[#9E72F8] hover:bg-[#9E72F8] hover:text-white'>Download CV</Link>
                    <div className='flex justify-center items-center gap-2'>
                        <FaXTwitter className='text-4xl border-[#9E72F8] text-[#9E72F8] border-2 p-2 rounded-full hover:bg-[#9E72F8] hover:text-white' />
                        <FaFirefoxBrowser className='text-4xl border-[#9E72F8] text-[#9E72F8] border-2 p-2 rounded-full hover:bg-[#9E72F8] hover:text-white' />
                        <FaLinkedin className='text-4xl border-[#9E72F8] text-[#9E72F8] border-2 p-2 rounded-full hover:bg-[#9E72F8] hover:text-white' />
                        <FaGithub className='text-4xl border-[#9E72F8] text-[#9E72F8] border-2 p-2 rounded-full hover:bg-[#9E72F8] hover:text-white' />
                        <FaFacebook className='text-4xl border-[#9E72F8] text-[#9E72F8] border-2 p-2 rounded-full hover:bg-[#9E72F8] hover:text-white' />
                    </div>
                </div>
            </div>
            <div className='w-[50%] p-4 '>
                <img src={heroImg} className='w-[450px] rounded-xl  border-4 border-[#C4A9FB] rotate-0 md:rotate-6 lg:rotate-6  hover:rotate-0 hover:transition-all ease-in-out' alt="" />
            </div>
        </section>
    );
};

export default Hero;