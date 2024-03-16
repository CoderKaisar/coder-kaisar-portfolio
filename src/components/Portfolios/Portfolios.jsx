import React from 'react';
import { Link } from 'react-router-dom';
import dashboard from "../../assets/images/portfolios/holy-grail-dashboard.png"
import Portfolio from './Portfolio';
const Portfolios = () => {
    const portfolios = [
        {
            image: dashboard,
            category: "Web Design",
            title: "Dashboard Design",
            tools: ["React JS", "React Router Dom", "Tailwind CSS", "Daisy UI", "React Icons", "Chart JS"]
        },
        {
            image: dashboard,
            category: "Web Design",
            title: "Dashboard Design",
            tools: ["React JS", "React Router Dom", "Tailwind CSS", "Daisy UI", "React Icons", "Chart JS"]
        },
        {
            image: dashboard,
            category: "Web Design",
            title: "Dashboard Design",
            tools: ["React JS", "React Router Dom", "Tailwind CSS", "Daisy UI", "React Icons", "Chart JS"]
        },
        {
            image: dashboard,
            category: "Web Design",
            title: "Dashboard Design",
            tools: ["React JS", "React Router Dom", "Tailwind CSS", "Daisy UI", "React Icons", "Chart JS"]
        },
        {
            image: dashboard,
            category: "Web Design",
            title: "Dashboard Design",
            tools: ["React JS", "React Router Dom", "Tailwind CSS", "Daisy UI", "React Icons", "Chart JS"]
        },
    ]
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-4 py-10'>
                <h2 className='text-6xl font-bold bg-gradient-to-r from-[#8E5AF8] to-[#D6C3FC] inline-block text-transparent bg-clip-text py-6'>My Portfolios</h2>
                <p className='text-white text-xl w-[50%] text-center'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
            <div className='flex justify-center items-center py-4'>
                <nav className='flex justify-center items-center gap-2 bg-[#050709] text-white w-[320px] h-[50px]  rounded-full'>
                    <Link className='hover:bg-gradient-to-r hover:from-[#7343D4] hover:to-[#331A64] px-4 py-2 rounded-full hover:border  hover:border-[#8F5CF8]'>All</Link>
                    <Link className='hover:bg-gradient-to-r hover:from-[#7343D4] hover:to-[#331A64] px-4 py-2 rounded-full hover:border  hover:border-[#8F5CF8]'>UI/UX</Link>
                    <Link className='hover:bg-gradient-to-r hover:from-[#7343D4] hover:to-[#331A64] px-4 py-2 rounded-full hover:border  hover:border-[#8F5CF8]'>Branding</Link>
                    <Link className='hover:bg-gradient-to-r hover:from-[#7343D4] hover:to-[#331A64] px-4 py-2 rounded-full hover:border  hover:border-[#8F5CF8]'>Apps</Link>
                </nav>
            </div>
            <div className='w-[80%] mx-auto'>
                <div className='grid grid-cols-3 gap-6 py-10 '>
                    {
                        portfolios.map(portfolio => <Portfolio portfolio={portfolio} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolios;