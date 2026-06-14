"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section  id="about">
      <div className=' dark:bg-black overflow-hidden dark:bg-none dark:text-white  min-h-screen flex flex-col py-5 px-5 justify-center bg-linear-to-b from-indigo-400 via-purple-500 to-purple-200  w-full'>
        <div>
      <h1 className='text-center text-5xl   font-extrabold  bg-linear-to-r from-indigo-700 via-purple-700 to-pink-200 bg-clip-text text-transparent my-10'>About Me</h1>
      </div>
      <div className=' flex-col items-center md:flex-row flex  gap-4 md:justify-around '>

        <motion.div viewport={{ once: false }} initial={{ x:-100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .8, ease: "easeOut" }} className='md:w-1/3 text-lg px-4'>

          <h2 className='text-3xl my-4 text-fuchsia-400'>Hi I'm Reham... </h2>
          <p>
          I am a Front-End Developer with a strong passion for building modern, responsive, and high-performance web applications.
          I earned my front-end Development certificate from Root Academy, where I developed a solid foundation in creating seamless and user-friendly interfaces. 
          I specialize in working with React and Next.js, leveraging their flexibility to build scalable and maintainable applications 
          My goal is to create digital products that are not only functional, but also visually appealing, intuitive, and efficient.
            I am always eager to learn new technologies and improve my skills to deliver better performance and user experience.
          </p>
        </motion.div>
        < motion.div viewport={{ once: false }} initial={{ x:100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .8, ease: "easeOut" }} >
          <Image src="/WhatsAppImage.jpeg" alt="photo" width={300} height={300} className="border rounded-lg"/>
        </motion.div>
      </div>


    </div>
    </section>
    
  )
}

export default About