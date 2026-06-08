import React from 'react'
import SkillsIcones from '../_components/skillsicones/SkillsIcones'


const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-linear-to-b from-purple-200 via-purple-500 to-indigo-400  dark:bg-none dark:bg-zinc-950 overflow-x-hidden ">
      <div className="flex flex-col md:justify-center lg:justify-center   min-h-screen  ">

        <div>
          <h2 className="text-center my-5 text-5xl   font-extrabold  bg-linear-to-r from-indigo-700 via-purple-700 to-pink-500 bg-clip-text text-transparent">My Front-End Skills</h2>

        </div>
        <div>
          <SkillsIcones />
        </div>
        
      
          
        
      
        




      </div>
    </section>

  )
}

export default Skills