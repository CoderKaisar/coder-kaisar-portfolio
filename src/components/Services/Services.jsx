import React from 'react';
import branding from "../../assets/images/services/branding.png"
import webdevelopment from "../../assets/images/services/webdevelopment.png"
import uxDesign from "../../assets/images/services/ux-design.png"
import webDesign from "../../assets/images/services/web-design.png"
import Service from './Service';

const Services = () => {
    const services = [
        {
            icon: branding,
            head: "Branding Design",
            text: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people"
        },
        {
            icon: webDesign,
            head: "Website Design",
            text: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people"
        },
        {
            icon: uxDesign,
            head: "UI/UX Design",
            text: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people"
        },
        {
            icon: webdevelopment,
            head: "Website Development",
            text: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people"
        },
    ]
    return (
        <div className='py-20 w-full'>
            <h2 className='text-center text-xl md:text-4xl  lg:text-6xl uppercase text-white py-10 mb-6 font-semibold'>My Quality Services</h2>
            <div className='mx-4 md:mx-16 lg:mx-20'>
                <div className='flex flex-col md:flex-row lg:flex-row flex-wrap justify-center items-center gap-6'>
                    {
                        services.map(service => <Service service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;