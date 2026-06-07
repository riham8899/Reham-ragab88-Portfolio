"use client"
import { TiHtml5 } from "react-icons/ti";
import { FaBootstrap, FaGithub, FaJsSquare } from "react-icons/fa";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { SiCss, SiModelcontextprotocol, SiPostman, SiTailwindcss, SiVite } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";


const SkillsIcones = () => {
    const [paused, setpaused] = useState(false)
    const [pausedTwo, setpausedTwo] = useState(false)

    const skills = [{
    name: "html", value: 95, icon: <TiHtml5 className="text-4xl text-orange-600" />},
    { name: "CSS", value: 95, icon: <SiCss className=" text-blue-800   text-3xl" /> },
    { name: "JS", value: 85, icon: <FaJsSquare className="text-4xl text-amber-300 " /> },
    { name: "TS", value: 80, icon: <BsTypescript className="text-4xl text-blue-500" /> },
    { name: "React", value: 80, icon: <GrReactjs className="text-4xl text-blue-400 " /> },
    { name: "Vite", value: 80, icon: <SiVite className="text-4xl text-green-900" /> },
    { name: "VS Code", value: 90, icon: <VscVscode className="text-4xl text-blue-700 " /> },

    ]

    const skillsTwo = [
        { name: "Next", value: 85, icon: <RiNextjsFill className="text-4xl text-black " /> },
        { name: "context", value: 85, icon: <SiModelcontextprotocol className="text-4xl text-green-900 " /> },
        { name: "Tailwind CSS", value: 80, icon: <SiTailwindcss className="text-3xl text-cyan-500 " /> },
        { name: "Git/GitHub", value: 75, icon: <FaGithub className="text-3xl text-black " /> },
        { name: "Postman", value: 80, icon: <SiPostman className="text-3xl  text-orange-600" /> },
        { name: "Framer Motion", value: 70, icon: <TbBrandFramerMotion className="text-3xl text-amber-200" /> },
        { name: "Bootstrap", value: 70, icon: <FaBootstrap className="text-3xl text-indigo-600 " /> },

    ]



    return <div className=" ">
        <div className="overflow-hidden w-full py-6  mb-3"

            onMouseEnter={() => setpaused(true)}
            onMouseLeave={() => setpaused(false)}>
            <motion.div initial={{ x: "0%" }}
            
                // animate={paused ? { } : { x: ["-50%", "0%"] }}
                animate={paused ? { x: "-50%" } : { x: ["-50%", "0%"] }} viewport={{ once: false }}
                transition={{ duration: paused ? 0:30 , repeat: Infinity,  ease: "linear"}}
                className="w-max  flex gap-3 justify-center">

                {[...skills, ...skills].map((skill, index) => (<div className=" bg-linear-to-b/shorter from-indigo-500 to-purple-400 border  rounded-2xl  will-change-transform flex  justify-center py-5 w-60 " key={index} >
                    <motion.div whileHover={{ scale: 1.09 }}  transition={{ duration: 1, ease: "easeOut" }} className="w-60   p-5 ">
                        <div className="text-center flex items-center flex-col gap-2 "> 
                            <i>{skill.icon}</i>
                            <p className="text-lg">{skill.name}</p>
                        </div>

                        <div className='h-3 bg-gray-500/30 flex items-center justify-between gap-1'>
                             <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.3,
                                }}
                                className="bg-blue-500 h-2 rounded"
                            />
                                {skill.value}%
                          
                        </div>
                    </motion.div>

                </div>))}


            </motion.div>
        </div>
        <div className=" py-6 overflow-hidden"
            onMouseEnter={() => setpausedTwo(true)}
            onMouseLeave={() => setpausedTwo(false)} >
            <motion.div initial={{ x: "0%" }} viewport={{ once: false }}
                animate={pausedTwo ? { x: "0%" } : { x: ["0%", "-50%"] }}
                // animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: pausedTwo ? 0:30 , ease: "linear" }}
                className="w-max  flex gap-3 justify-center">
                {[...skillsTwo, ...skillsTwo].map((skill, index) => (<div className="bg-linear-to-b/shorter from-purple-400 to-indigo-400  will-change-transform flex border  rounded-2xl  justify-center py-5 w-60 " key={index}>
                    <motion.div whileHover={{ scale: 1.09 }} transition={{ duration: 1, ease: "easeOut" }}
                        className="w-60  p-5 ">
                        <div className="flex flex-col items-center gap-2">
                            <i>{skill.icon}</i>
                            <p className="text-lg">{skill.name}</p>
                        </div>
                        <div className='h-3  bg-gray-500/30 flex items-center justify-between gap-1'>
                            <motion.div viewport={{ once: false }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{ duration: 1, delay: index * 0.3 }}
                                className="bg-blue-500 h-2 rounded" />
                            
                                {skill.value}%
                            

                        </div>

                    </motion.div>

                </div>
                ))}


            </motion.div>
        </div>
    </div>
}




export default SkillsIcones