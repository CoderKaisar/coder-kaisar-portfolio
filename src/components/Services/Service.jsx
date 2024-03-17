import React from 'react';

const Service = ({ service }) => {
    const { icon, head, text } = service
    return (
        <div className="card shadow-xl w-64 hover:bg-[#7142D0] text-white border-2 border-[#7142D0]">
            <div className='flex justify-center items-center py-4'>
                <img src={icon} className='w-20 rounded-full border-2  border-[#7142D0]' alt="" />
            </div>
            <div className="card-body flex justify-center  items-center gap-8">
                <h2 className="card-title text-center text-2xl">{head}</h2>
                <p className='text-md text-center'>{text}</p>

            </div>
        </div>
    );
};

export default Service;