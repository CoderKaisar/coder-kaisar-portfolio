import React from 'react';

const Achievement = () => {
    const achievements = [
        {
            title: "14",
            text: "Years of Experience",
        },
        {
            title: "50+",
            text: "Project Completed",
        },
        {
            title: "1.5K",
            text: "Happy Clients",

        },
        {
            title: "15+",
            text: "Sites Works",

        }

    ]
    return (
        <div className='mx-auto py-10'>
            <div className='grid grid-cols-4 content-center items-center text-white'>
                {
                    achievements.map(achievement => <div className='flex flex-col justify-center items-center gap-6'>

                        <div className='flex justify-center items-center gap-4'>
                            <h2 className='text-6xl font-bold'>{achievement.title}</h2>
                            <div className='w-24'>
                                <p className='text-xl'>{achievement.text}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Achievement;