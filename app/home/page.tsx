import React from 'react'
import SoftAurora from '../_components/background/SoftAurora'
import TextAnimation from './../_components/textAnimation/TextAnimation';
import { Button } from "@/components/ui/button";
import { MdWavingHand } from 'react-icons/md';



const Home = () => {

    return (
        <section  id="home">
            <div className=' dark:bg-none dark:bg-zinc-950 relative w-full h-screen overflow-hidden bg-linear-to-b from-purple-200 via-purple-500 to-indigo-400   ' >
                <div className='absolute inset-0 z-10'>
                    <SoftAurora speed={1.2} color1="#f2e3e3" color2="#5812ce" />
                </div>
                <div className="relative z-10 flex flex-col  justify-center  items-start  h-full  px-4 md:px-10 gap-5">
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-amber-200 dark:text-fuchsia-300">Hello, I'm <a> <MdWavingHand className='text-amber-300 animate-bounce' /> </a>
                    </h2>

                    <h1 className='text-5xl lg:text-6xl  font-extrabold my-2 text-violet-950 dark:bg-linear-to-r from-indigo-700 via-purple-600 to-fuchsia-700 bg-clip-text dark:text-transparent'>  Reham Ragab</h1>
                    {/* <p className=" max-w-xl text-xl">A front-end developer passionate about creating diverse projects and working on freelance projects </p> */}
                    <TextAnimation />

                    <p className=" max-w-md text-2xl  text-gray-950  dark:text-blue-400 mt-4 ">Afront-end developer passionate about creating diverse projects and working on freelance projects </p>

                    <div className="flex gap-4  ">
                        <Button variant="outline" className='bg-indigo-500 border-indigo-300  hover:bg-indigo-400 dark:border-indigo-300 dark:bg-indigo-500/40 p-4'><a href="#contact">Contact Us</a></Button>
                        <Button variant="outline" className='bg-fuchsia-500/50 border-fuchsia-300 p-4 hover:bg-fuchsia-400/50 dark:border-fuchsia-500  dark:bg-fuchsia-400/40'>Download CV</Button>
                    </div>
                </div>







            </div>
        </section>




    )
}

export default Home