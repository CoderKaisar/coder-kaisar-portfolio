import React from 'react';

const Skill = ({ skill }) => {
    const { icon, head, learning } = skill
    return (

        <div className='hover:text-white'>
            <div className="card border w-34 h-44  border-[#7142D0] hover:bg-[#7142D0]">
                <div className="flex  flex-col justify-center items-center spay-y-4 card-body">
                    <div className='w-[80%]'>
                        <img src={icon} className='w-24 h-16 p-2 rounded-xl' alt="" />
                    </div>
                    <div className='w-[20%] flex justify-center items-center'>
                        <p className='text-2xl font-bold'>{learning}%</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center py-6 '>
                <h2 className="card-title text-gray-400 hover:text-[#8750F7]">{head}</h2>
            </div>
        </div>

    );
};

export default Skill;