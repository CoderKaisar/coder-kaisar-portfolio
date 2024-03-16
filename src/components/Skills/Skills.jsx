import React from 'react';
import figma from "../../assets/images/skills/figma.png"
import express from "../../assets/images/skills/express.png"
import firebase from "../../assets/images/skills/firebase.png"
import javascript from "../../assets/images/skills/javascript.png"
import mongodb from "../../assets/images/skills/mongodb.png"
import react from "../../assets/images/skills/react.png"
import vercel from "../../assets/images/skills/vercel.png"
import Skill from './Skill';
const Skills = () => {
    const skills = [
        {
            icon: figma,
            head: "Figma",
            learning: "92"
        },
        {
            icon: express,
            head: "Express JS",
            learning: "89"
        },
        {
            icon: firebase,
            head: "Firebase",
            learning: "86"
        },
        {
            icon: javascript,
            head: "Javascript",
            learning: "90"
        },
        {
            icon: mongodb,
            head: "Mongodb",
            learning: "87"
        },
        {
            icon: react,
            head: "React JS",
            learning: "92"
        },
        {
            icon: vercel,
            head: "Vercel",
            learning: "90"
        },
    ]
    return (
        <section className='py-10'>
            <div className='flex flex-col justify-center items-center gap-4 py-20'>
                <h2 className='text-4xl font-bold text-white'>My Skills</h2>
                <p className='text-xl text-white w-[50%] text-center'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-6'>
                {
                    skills.map(skill => <Skill skill={skill} />)
                }
            </div>


        </section>
    );
};

export default Skills;