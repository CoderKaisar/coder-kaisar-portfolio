import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

const Contact = () => {
    return (
        <section className='my-10 '>
            <div className='flex justify-around items-center space-x-7 gap-x-20'>
                <div className='flex rounded-lg'>
                    <div className='w-[50%] flex justify-center items-center '>
                        <form>
                            <div className='bg-[#140C1C] p-[48px] space-y-2 space'>
                                <div className='pb-10'>
                                    <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8E5AF8] to-[#D6C3FC] inline-block text-transparent bg-clip-text py-4'>Let’s work together!</h2>
                                    <p className='text-lg text-white'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                                </div>
                                <div className='flex gap-4'>
                                    <input type="text" className='w-[300px] h-12 rounded-lg border-2 border-[#2F175C] bg-[#050709] pl-4 text-xl' placeholder='First Name' />
                                    <input type="text" className='w-[300px] h-12 rounded-lg border-2 border-[#2F175C] bg-[#050709] pl-4 text-xl' placeholder='Last Name' />
                                </div>
                                <div className='flex gap-4'>
                                    <input type="email" className='w-[300px] h-12 rounded-lg border-2 border-[#2F175C] bg-[#050709] pl-4 text-xl' placeholder='Email Address' />
                                    <input type="number" className='w-[300px] h-12 rounded-lg border-2 border-[#2F175C] bg-[#050709] pl-4 text-xl' placeholder='Phone Number' />
                                </div>
                                <div>
                                    <select className='w-full h-12 rounded-lg border-2 border-[#2F175C] bg-[#050709] select select-bordered text-white text-xl' placeholder="Choose Service text-xl">
                                        <option selected>Choose Service</option>
                                        <option>Web Design</option>
                                        <option>Full Stack Development</option>
                                        <option>Digital Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <textarea className='w-full h-[200px] rounded-lg border-2 border-[#2F175C] bg-[#050709] textarea textarea-bordered text-xl' placeholder="Message"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-[50%] flex justify-center items-center'>
                        <div className=' flex flex-col justify-center items-start gap-8 mt-20'>
                            <div className='flex justify-start items-center gap-8'>
                                <span>
                                    <FiPhoneCall className='bg-gradient-to-b from-[#3B1F71] to-[#7545D8] text-white text-6xl rounded-full p-4' />
                                </span>
                                <div className='flex flex-col'>
                                    <h2 className='text-[#DDDDD0]'>Phone</h2>
                                    <p className='text-white font-bold text-xl'>+880 0170 000 000</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-8'>
                                <span>
                                    <IoMail className='bg-gradient-to-b from-[#3B1F71] to-[#7545D8] text-white text-6xl rounded-full p-4' />
                                </span>
                                <div className='flex flex-col'>
                                    <h2 className='text-[#DDDDD0]'>Email</h2>
                                    <p className='text-white font-bold text-xl'>mail@coderkaisar.com</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-8'>
                                <span>
                                    <LuMapPin className='bg-gradient-to-b from-[#3B1F71] to-[#7545D8] text-white text-6xl rounded-full p-4' />
                                </span>
                                <div className='flex flex-col'>
                                    <h2 className='text-[#DDDDD0]'>Address</h2>
                                    <p className='text-white font-bold text-xl'>Badda, Dhaka-1214</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;