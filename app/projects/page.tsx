
import React from 'react'
import { CardPro } from '../_components/card/CardPro'

const Projects = () => {
    return (
        <section id="projects">
            <div className='min-h-screen flex flex-col  justify-center bg-linear-to-b from-indigo-400 via-purple-500 to-purple-200  dark:bg-none dark:bg-zinc-950 w-full'>

                <h1 className='text-center pt-10 text-5xl   font-extrabold  bg-linear-to-r from-indigo-700 via-purple-700 to-pink-500 bg-clip-text text-transparent'> My Projects</h1>




                <CardPro />



            </div>
        </section>

    )
}

export default Projects
