"use client"
import React from 'react'

import {
  Card,

  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";



import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaLocationDot, FaSquareWhatsapp } from 'react-icons/fa6';

import {  motion } from 'framer-motion';


const Contact = () => {
  return (
    <section id="contact" className=" bg-linear-to-b from-purple-200 via-purple-500 to-indigo-400 dark:bg-none dark:bg-black w-full">
      <div className='m-auto flex flex-col  px-5 justify-center   min-h-screen '>
        <h1 className='text-center  text-5xl  pb-10 font-extrabold  bg-linear-to-r from-indigo-700 via-purple-700 to-pink-500 bg-clip-text text-transparent'>Get In Touch</h1>

        <div className="flex flex-col  my-5 justify-center   items-center">

          <div className='flex flex-col md:flex-row my-5 justify-center  w-full gap-2 items-center'>

            <motion.div initial={{ y: 50, opacity: 0 }} transition={{ duration: .9, ease: "easeOut" }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} className='flex flex-col gap-4  items-center w-full'>
              <Card size="sm" className="bg-purple-300  dark:bg-purple-600/40 mx-auto w-full max-w-sm hover:scale-105 transition duration-300">
                <CardHeader>
                  <CardTitle className=' text-xl! text-center font-bold '>Email</CardTitle>
                  <CardDescription className="flex items-center text-center gap-2">
                    <MdEmail className="text-3xl text-fuchsia-500 hover:drop-shadow-[0_0_10px_#d946ef] hover:scale-110 transition-all duration-300" />

                    <a href="mailto:riham.ragab42@gmail.com" target="_blank"
                      className="hover:text-indigo-400 transition m-auto text-black dark:text-white">
                      riham.ragab42@gmail.com
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card size="sm" className=" bg-purple-300   dark:bg-purple-600/40 mx-auto w-full max-w-sm hover:scale-105 transition duration-300">
                <CardHeader>
                  <CardTitle className=' text-xl! text-center font-bold '>Phone</CardTitle>
                  <CardDescription className="flex items-center justify-between gap-2 hover:text-indigo-400 transition text-black dark:text-white">
                    <FaPhone className="text-3xl  text-lime-300 hover:drop-shadow-[0_0_10px_#bef264] hover:scale-110 transition duration-300" />

                    01127324144
                    <div>   <a
                      href=" https://wa.me/+201127324144"
                      target="_blank"
                      className="hover:text-indigo-400 transition m-auto">
                      <FaSquareWhatsapp className="text-3xl text-green-400 hover:drop-shadow-[0_0_10px_#22d3ee] hover:scale-110 transition duration-300" />

                    </a> </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div viewport={{ once: false }} initial={{ y: 50, opacity: 0 }} transition={{ duration: .9, ease: "easeOut" }} whileInView={{ opacity: 1, y: 0 }} className='flex flex-col gap-4 pt-2 md:pt-0 w-full  items-center '>
              <Card size="sm" className="bg-purple-300   dark:bg-purple-600/40 mx-auto w-full max-w-sm hover:scale-105 transition duration-300">
                <CardHeader className='text-center'>
                  <CardTitle className=' text-xl! text-center font-bold '>linkedIn</CardTitle>
                  <CardDescription className='flex items-center gap-2'>
                    <FaLinkedin className="text-3xl text-cyan-400  hover:drop-shadow-[0_0_10px_#67e8f9] hover:scale-110 transition duration-300" />
                    <a
                      href=" https://www.linkedin.com/in/reham-ragab-1bb6152b6"
                      target="_blank"
                      className="hover:text-indigo-400 transition m-auto text-black dark:text-white">
                      linkedin.com/in/reham-ragab-1bb6152b6
                    </a>


                  </CardDescription>
                </CardHeader>
              </Card>
              <Card size="sm" className="bg-purple-300  dark:bg-purple-600/40 mx-auto w-full max-w-sm hover:scale-105 transition duration-300 ">
                <CardHeader>
                  <CardTitle className=' text-xl! text-center font-bold '>GitHub</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-black dark:text-white">
                    <FaGithub className="text-3xl text-emerald-300 hover:drop-shadow-[0_0_10px_#67e8f9] hover:scale-110 transition duration-300" />
                    <a
                      href="  https://github.com/riham8899"
                      target="_blank"
                      className="hover:text-indigo-400 transition m-auto"
                    >
                      https://github.com/riham8899
                    </a>
                  </CardDescription >
                </CardHeader >
              </Card>
            </motion.div>



          </div>

          <motion.div viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} initial={{ y: 35, opacity: 0 }} transition={{ duration: 1, ease: "easeOut" }} className='w-full m-auto  '>
            <Card size="sm" className="bg-purple-300 dark:bg-purple-600/40 mx-auto w-full max-w-sm hover:scale-105 transition duration-300 ">
              <CardHeader>
                <CardTitle className=' text-xl! text-center font-bold '>Location</CardTitle>
                <CardDescription className="flex items-center gap-2 m-auto hover:text-indigo-400 transition text-black dark:text-white">
                  <FaLocationDot className="text-3xl text-blue-600 hover:drop-shadow-[0_0_10px_#3b82f6] hover:scale-110 transition duration-300 " />
                  Alexandria ,Egypt
                </CardDescription >
              </CardHeader >
            </Card>

          </motion.div>

        </div>

      </div>
    </section>

  )
}

export default Contact