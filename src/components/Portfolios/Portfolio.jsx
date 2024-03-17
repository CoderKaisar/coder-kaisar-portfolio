import React from 'react';
import "../../assets/style/portfolio.style.css"
const Portfolio = ({ portfolio }) => {
    const { image, category, title, tools } = portfolio
    return (
        <div>
            <figure className='relative' id='porfolio'>
                <img src={image} className='rounded-lg border-2 border-[#9666F8]' alt="" />
                {/* hover link */}
                <div className='hidden'>
                    <div className='absolute -mt-[220px] bg-gray-800 w-full h-full rounded-lg opacity-80 flex flex-col justify-center items-between'>
                        <div className='flex justify-center items-center text-white gap-6'>
                            <button className='border border-[#7142D0] hover:bg-[#7142D0] px-4 rounded-full'>Github Link</button>
                            <button className='border border-[#7142D0] hover:bg-[#7142D0] px-4 rounded-full'>Live Link</button>
                            <button className='border border-[#7142D0] hover:bg-[#7142D0] px-4 rounded-full'>Preview</button>
                        </div>
                    </div>
                </div>

            </figure>
        </div>
    );
};

export default Portfolio;